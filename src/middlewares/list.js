import { OK, CREATED, ACCEPTED, NOT_FOUND } from 'http-status'

import List from '../models/List'

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
      .populate('stories')
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
      name: 'المفضلة',
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
