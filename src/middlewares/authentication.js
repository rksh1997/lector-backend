import jwt from 'jsonwebtoken'
import { CREATED, UNPROCESSABLE_ENTITY } from 'http-status'

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

export async function createAuthToken(req, res, next) {
  const { user } = req
  try {
    const token = jwt.sign(user, JWT_SECRET)
    res.status(CREATED).json({
      user,
      token,
    })
  } catch (e) {
    next(e)
  }
}
