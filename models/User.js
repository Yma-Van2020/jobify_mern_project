import mongoose, { mongo } from 'mongoose';
import validator from 'validator'

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
    minlength: 6
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

export default mongoose.model('User', UserSchema)