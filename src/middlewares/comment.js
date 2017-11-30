import { OK, CREATED, ACCEPTED, NOT_FOUND } from 'http-status'

import Comment from '../models/Comment'
import User from '../models/User'

export async function createComment(req, res, next) {
  const { id } = req.params
  const { content } = req.body
  try {
    const comment = await Comment.create({
      part: id,
      author: req.user,
      content,
    })
    const author = await User.findOne({ _id: req.user }).select('name')
    res.status(CREATED).json({
      content: comment.content,
      createdAt: comment.createdAt,
      part: comment.part,
      author,
    })
  } catch (e) {
    next(e)
  }
}

export async function getComment(req, res, next) {
  const { cid } = req.params
  try {
    const comment = await Comment.findOne({ _id: cid })
    res.status(OK).json(comment)
  } catch (e) {
    next(e)
  }
}

export async function getComments(req, res, next) {
  const { id } = req.params
  try {
    const comments = await Comment.find({ part: id }).populate('author', 'name')
    res.status(OK).json(comments)
  } catch (e) {
    next(e)
  }
}

export async function updateComment(req, res, next) {
  const { cid } = req.params
  const { content } = req.body
  try {
    const comment = await Comment.findOneAndUpdate({ _id: cid }, { content }, { new: true })
      .populate('author', 'name')
    res.status(ACCEPTED).json(comment)
  } catch (e) {
    next(e)
  }
}

export async function deleteComment(req, res, next) {
  const { cid } = req.params
  try {
    const comment = await Comment.findOneAndRemove({ _id: cid })
      .populate('author', 'name')
    res.status(ACCEPTED).json(comment)
  } catch (e) {
    next(e)
  }
}

export async function findComment(req, res, next) {
  const { cid } = req.params
  try {
    const comment = await Comment.findOne({ _id: cid })
    if (!comment) {
      return res.status(NOT_FOUND).json({
        message: '404 Not Found',
      })
    }
    req.comment = comment._id
    return next()
  } catch (e) {
    return next(e)
  }
}
