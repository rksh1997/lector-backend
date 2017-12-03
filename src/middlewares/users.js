import { OK } from 'http-status'

import User from '../models/User'
import Story from '../models/Story'
import List from '../models/List'

export async function getUserProfile(req, res, next) {
  const { id } = req.params
  try {
    const [user, stories, lists] = await Promise.all([
      User.findOne({ _id: id })
        .select('-password -resetPasswordToken -resetPasswordTokenExpire'),
      Story.find({ author: id, removed: false }).lean(),
      List.find({ user: id }).populate('stories', '_id title').lean(),
    ])
    res.status(OK).json({
      user,
      stories,
      lists,
    })
  } catch (e) {
    next(e)
  }
}
