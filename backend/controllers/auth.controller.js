import bcrypt from 'bcryptjs'

import User from '../models/user.model.js'

const signup = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ success: false, message: "password doesn't match" })
    }
    let user = await User.findOne({ username: req.body.username })
    if (user) {
      return res.status(404).json({ success: false, message: 'Account is already exists' })
    }
    // // random avatar
    // if (req.body.gender === 'male') {
    //   req.body.profilePhoto = req.body.profilePhoto
    //     ? req.body.profilePhoto
    //     : `https://avatar.iran.liara.run/public/boy?username=${req.body.username}`
    // } else if (req.body.gender === 'female') {
    //   req.body.profilePhoto = req.body.profilePhoto
    //     ? req.body.profilePhoto
    //     : `https://avatar.iran.liara.run/public/girl?username=${req.body.username}`
    // }
    // hash password
    req.body.password = bcrypt.hashSync(req.body.password, 10)

    user = await User.create({
      fullName: req.body.fullName,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      profilePhoto:
        req.body.gender === 'male'
          ? `https://avatar.iran.liara.run/public/boy?username=${req.body.username}`
          : `https://avatar.iran.liara.run/public/girl?username=${req.body.username}`,
    })
    const { password, ...rest } = user._doc
    res.status(201).json({ success: true, user: rest })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

export { signup }
