import { OK, NOT_FOUND, CREATED, ACCEPTED } from 'http-status'

import Story from '../models/Story'

export async function createStory(req, res, next) {
  try {
    const story = new Story(req.body)
    story.user = req.user
    await story.save()
    return res.status(CREATED).json(story)
  } catch (e) {
    return next(e)
  }
}

export async function updateStory(req, res, next) {
  try {
    const story = await Story.findOneAndUpdate({ _id: req.story }, req.body, { new: true })
    return res.status(ACCEPTED).json(story)
  } catch (e) {
    return next(e)
  }
}

export async function getStory(req, res, next) {
  try {
    const story = await Story.findOne({ _id: req.story })
    return res.status(OK).json(story)
  } catch (e) {
    return next(e)
  }
}

export async function getAllStories(req, res, next) {
  const { sort } = req.query
  const sortBy = {}
  if (sort === 'featured') sortBy.stars = -1
  if (sort === 'newest') sortBy._id = -1
  try {
    const { page, limit } = req.pagination
    const stories = await Story.fetchPage(
      page,
      limit,
      {},
      sortBy,
    )
    return res.status(OK).json(stories)
  } catch (e) {
    return next(e)
  }
}

export async function deleteStory(req, res, next) {
  try {
    const story = await Story.findOneAndRemove({ _id: req.story })
    return res.status(ACCEPTED).json(story)
  } catch (e) {
    return next(e)
  }
}

export async function findStory(req, res, next) {
  try {
    const { id } = req.params
    const story = await Story.findOne({ _id: id })
    if (story) {
      req.story = id
      return next()
    }
    return res.status(NOT_FOUND).json({ message: 'Not found' })
  } catch (e) {
    return next(e)
  }
}

export async function countStories(req, res, next) {
  const { query } = req
  try {
    const count = await Story.count(query)
    res.status(OK).json({
      count,
    })
  } catch (e) {
    next(e)
  }
}

