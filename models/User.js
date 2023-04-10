import mongoose, { mongo } from 'mongoose';
import validator from 'validator'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true,' Pleased provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    required: [true,' Pleased provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Pleased provide email'
    },
    unique: true
  },
  password: {
    type: String,
    required: [true,' Pleased provide password'],
    minlength: 6,
    select: false
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: 'last name'
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city'
  }
})

UserSchema.pre('save', async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  // returns a signed JWT as a string
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d'})
}


export default mongoose.model('User', UserSchema)