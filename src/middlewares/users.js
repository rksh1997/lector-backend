import { OK } from 'http-status'

import User from '../models/User'
import Story from '../models/Story'

export async function getUser(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findOne({ _id: id })
      .select('-password -resetPasswordToken -resetPasswordTokenExpire')
    res.status(OK).json(user)
  } catch (e) {
    next(e)
  }
}

export async function getUserProfile(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findOne({ _id: id })
      .select('-password -resetPasswordToken -resetPasswordTokenExpire')
    const stories = await Story.find({ author: id, removed: false }).lean()
    res.status(OK).json({
      user,
      stories,
    })
  } catch (e) {
    next(e)
  }
}
