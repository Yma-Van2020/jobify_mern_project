import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (req, res) => {
  const {name, email, password} = req.body

  if(!name || !email || !password){
    throw new BadRequestError('please provide all values')
  }
  const userAlreadyExists = await User.findOne({email});
  if(userAlreadyExists){
    throw new BadRequestError('Email already in use')
  }

  const user = await User.create({name, email, password});
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user:{email: user.email, lastName: user.lastName, location: user.location, name: user.name}, token, location: user.location})
}

const login = async (req, res) => {
  const {email, password } = req.body
  if(!email || !password){
    throw new BadRequestError('please provide all values')
  }
  //pw was set to select: false, so we need to +password here
  const user = await User.findOne({email}).select('+password')
  if(!user){
    throw new UnAuthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if(!isPasswordCorrect){
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  //the old JWT might have expired, so we create new JWT
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({user, token, location: user.location})
}

const updateUser = async (req, res) => {
  const { email, name, lastName, location} = req.body
  if(!email || !name || !lastName || !location) {
    throw new BadRequestError('please provide all the values')
  }
  const user = await User.findOne({_id: req.user.userId})

  user.email = email
  user.name = name
  user.lastName = lastName
  user.location = location

  await user.save()
  // / after updating the user, a new JWT needs to be created to reflect the updated user data
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({user, token, location: user.location})
  res.send('update user')
}

export { register, login, updateUser }