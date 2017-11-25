import { CREATED, OK, ACCEPTED, NOT_FOUND } from 'http-status'

import Part from '../models/Part'
import Story from '../models/Story'

export async function createPart(req, res, next) {
  const { storyId } = req.body
  try {
    const story = await Story.findOne({ _id: storyId, author: req.user })
    if (!story) {
      res.status(NOT_FOUND).json({
        message: '404 Not Found',
      })
    } else {
      const part = new Part(Object.assign({}, req.body, { story: storyId }))
      await part.save()
      story.parts.push(part._id)
      await story.save()
      res.status(CREATED).json(part)
    }
  } catch (e) {
    next(e)
  }
}

export async function getPart(req, res, next) {
  const { id } = req.params
  try {
    const part = await Part.findOne({ _id: id })
    res.status(OK).json(part)
  } catch (e) {
    next(e)
  }
}

export async function updatePart(req, res, next) {
  const { id } = req.params
  try {
    const part = await Part.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(ACCEPTED).json(part)
  } catch (e) {
    next(e)
  }
}

export async function deletePart(req, res, next) {
  const { id } = req.params
  try {
    const part = await Part.findOneAndUpdate({ _id: id }, { removed: true })
    res.status(ACCEPTED).json(part)
  } catch (e) {
    next(e)
  }
}

export async function findPart(req, res, next) {
  const { id } = req.params
  try {
    const part = await Part.findOne({ _id: id, removed: false })
    if (!part) {
      res.status(NOT_FOUND).json({
        message: 'Not Found',
      })
    } else {
      req.part = part._id
      next()
    }
  } catch (e) {
    next(e)
  }
}
