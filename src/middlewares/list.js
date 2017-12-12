import { OK, CREATED, ACCEPTED, NOT_FOUND } from 'http-status'

import List from '../models/List'
import Story from '../models/Story'

export async function createList(req, res, next) {
  try {
    const list = await List.create(Object.assign({}, req.body, { user: req.user, isDefault: false }))
    res.status(CREATED).json(list)
  } catch (e) {
    next(e)
  }
}

export async function getList(req, res, next) {
  const { id } = req.params
  try {
    const list = await List.findOne({ _id: id })
      .populate({
        path: 'stories',
        populate: {
          path: 'author',
          select: 'name',
        },
      })
    res.status(OK).json(list)
  } catch (e) {
    next(e)
  }
}

export async function deleteList(req, res, next) {
  const { id } = req.params
  try {
    const list = await List.findOneAndRemove({ _id: id, isDefault: false, user: req.user })
    res.status(ACCEPTED).json(list)
  } catch (e) {
    next(e)
  }
}

export async function createDefaultLists(req, res, next) {
  try {
    await List.create({
      name: 'للقراءة',
      user: req.user._id,
    })
    next()
  } catch (e) {
    next(e)
  }
}

export async function findList(req, res, next) {
  const { id } = req.params
  try {
    const list = await List.findOne({ _id: id })
    if (!list) {
      return res.status(NOT_FOUND).json({
        message: '404 Not Found',
      })
    }
    return next()
  } catch (e) {
    return next(e)
  }
}

export async function addStoryToList(req, res, next) {
  const { storyId } = req.body
  const { id } = req.params
  try {
    const story = await Story.findOne({ _id: storyId })
    if (!story) {
      res.status(NOT_FOUND).json({
        message: '404 Not Found',
      })
    }
    const list = await List.findOne({ _id: id, user: req.user })
    if (!list) {
      res.status(NOT_FOUND).json({
        message: '404 Not Found',
      })
    }
    const storyIndex = list.stories.indexOf(storyId)
    if (storyIndex !== -1) {
      list.stories.splice(storyIndex, 1)
    } else {
      list.stories.push(storyId)
    }
    await list.save()
    res.status(ACCEPTED).json(list)
  } catch (e) {
    next(e)
  }
}
