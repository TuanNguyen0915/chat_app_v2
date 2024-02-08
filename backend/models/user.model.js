import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  profilePhoto: {
    type: String,
    default: 'https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png',
  },
})

const User = mongoose.model('User', userSchema)
export default User