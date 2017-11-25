import jwt from 'jsonwebtoken'
import { generate as shortid } from 'shortid'
import {
  OK,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
  NOT_FOUND,
  NO_CONTENT,
  ACCEPTED,
} from 'http-status'

import User from '../models/User'
import { getJSON } from '../services/httpService'
import { JWT_SECRET } from '../config'

export async function register(req, res, next) {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (user) {
      return res.status(UNPROCESSABLE_ENTITY).json({
        message: 'email has been already taken',
      })
    }
    const username = shortid()
    const body = Object.assign({}, req.body, { username })
    const { _id } = await User.create(body)
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

export async function loginFacebook(req, res, next) {
  const { token } = req.body
  if (!token) {
    return res.status(UNAUTHORIZED).json({
      message: 'no token provided',
    })
  }
  try {
    const URL = `https://graph.facebook.com/me?fields=name,email,picture&access_token=${token}`
    const { name, email, picture } = await getJSON(URL)

    // if already register, create auth token and login
    const user = await User.findOne({ email })
    if (user) {
      req.user = {
        _id: user._id,
        username: user.username,
        email: user.email,
      }
      return next()
    }

    // else register new user
    const { _id, username } = await User.create({
      name: {
        first: name.split(' ')[0],
        last: name.split(' ')[1],
      },
      email,
      username: shortid(),
      avatar: picture.data.url,
    })
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
    res.status(OK).json({
      user,
      token,
    })
  } catch (e) {
    next(e)
  }
}

export async function isAuthenticated(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(UNAUTHORIZED).json({
      message: 'no authorization header provided',
    })
  }

  const token = authorization.split(' ')[1]

  if (!token) {
    return res.status(UNAUTHORIZED).json({
      message: 'no token provided',
    })
  }

  try {
    const user = await jwt.verify(token, JWT_SECRET)
    req.user = user._id
    return next()
  } catch (e) {
    return res.status(UNAUTHORIZED).json({
      message: 'invalid token',
    })
  }
}

export async function resetPasswordRequest(req, res, next) {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(NOT_FOUND).json({
        message: '404 Not found',
      })
    }
    await user.generateResetPasswordToken()
    // TODO: send email with reset link
    return res.status(NO_CONTENT).end()
  } catch (e) {
    return next(e)
  }
}

export async function resetPassword(req, res, next) {
  const { password, token } = req.body
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpire: {
        $gte: Date.now(),
      },
    })
    if (!user) {
      return res.status(UNPROCESSABLE_ENTITY).json({
        message: 'Invalid/Expired token',
      })
    }
    user.password = password
    await user.save()
    return res.status(ACCEPTED).json({
      message: 'Password was successfully updated',
    })
  } catch (e) {
    return next(e)
  }
}
