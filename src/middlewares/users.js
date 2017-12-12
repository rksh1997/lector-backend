import { OK, UNPROCESSABLE_ENTITY, UNAUTHORIZED, ACCEPTED } from 'http-status'

import User from '../models/User'
import Story from '../models/Story'
import List from '../models/List'

export async function getUserProfile(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findOne({ _id: id })
      .select('-password -resetPasswordToken -resetPasswordTokenExpire')
    res.status(OK).json(user)
  } catch (e) {
    next(e)
  }
}

export async function getUserLists(req, res, next) {
  const { id } = req.params
  const { populate } = req.query
  let listsQuery
  try {
    const query = List.find({ user: id })
    if (populate) {
      listsQuery = query.populate('stories')
    } else {
      listsQuery = query
    }
    const lists = await listsQuery.exec()
    res.status(OK).json(lists)
  } catch (e) {
    next(e)
  }
}

export async function getUserStories(req, res, next) {
  const { id } = req.params
  try {
    const stories = await Story.find({ author: id, removed: false })
      .populate('author', 'name')
    res.status(OK).json(stories)
  } catch (e) {
    next(e)
  }
}

export async function getUsers(req, res, next) {
  try {
    const users = await User.find().select('-password -resetPasswordToken -resetPasswordTokenExpire')
    res.status(OK).json(users)
  } catch (e) {
    next(e)
  }
}

export async function changePassword(req, res, next) {
  const { oldpassword, password, confirmpassword } = req.body
  if (password !== confirmpassword) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      password: 'passwords does not match.',
    })
  }
  try {
    const user = await User.findOne({ _id: req.user })
    const isMatch = await user.comparePassword(oldpassword)
    if (!isMatch) {
      return res.status(UNAUTHORIZED).json({
        passowrd: 'incorrect password',
      })
    }
    user.password = password
    await user.save()
    return res.status(ACCEPTED).json({
      message: 'Password successfully changed.',
    })
  } catch (e) {
    return next(e)
  }
}

export async function updateUserInfo(req, res, next) {
  const restricted = ['id', '_id', 'password', 'resetPasswordToken', 'resetPasswordTokenExpire', 'totalWorks', 'email']
  try {
    const user = await User.findOne({ _id: req.user })
    const { username } = req.body
    if (username) {
      const other = await User.findOne({ username, _id: { $ne: user._id } })
      if (other) {
        return res.status(UNPROCESSABLE_ENTITY).json({
          username: 'username already exists.',
        })
      }
    }
    Object.keys(req.body).forEach((key) => {
      if (restricted.indexOf(key) === -1) {
        user[key] = req.body[key]
      }
    })
    await user.save()
    return res.status(ACCEPTED).json({
      message: 'User information successfully updated.',
    })
  } catch (e) {
    return next(e)
  }
}
