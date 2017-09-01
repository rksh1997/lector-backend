import jwt from 'jsonwebtoken'
import {
  OK,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
} from 'http-status'

import User from '../models/User'
import { JWT_SECRET } from '../config'

export async function register(req, res, next) {
  try {
    const { email, username } = req.body
    const user = await User.findOne({
      $or: [{ email }, { username }],
    })
    if (user) {
      return res.status(UNPROCESSABLE_ENTITY).json({
        message: 'username or email is already taken',
      })
    }
    const { _id } = await User.create(req.body)
    req.user = {
      _id,
      username,
      email,
    }
    return next()
  } catch (e) {
    return next(e)
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(UNAUTHORIZED).json({
        message: 'Invalid Email/Password',
      })
    }
    const result = await user.comparePassword(password)
    if (!result) {
      return res.status(UNAUTHORIZED).json({
        message: 'Invalid Email/Password',
      })
    }
    req.user = {
      _id: user._id,
      email: user.email,
      username: user.username,
    }
    return next()
  } catch (e) {
    return next(e)
  }
}

export async function createAuthToken(req, res, next) {
  const { user } = req
  try {
    const token = jwt.sign(user, JWT_SECRET)
    res.status(OK).json({
      user,
      token,
    })
  } catch (e) {
    next(e)
  }
}
