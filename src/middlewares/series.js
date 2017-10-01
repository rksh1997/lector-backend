import { OK, NOT_FOUND, CREATED, ACCEPTED } from 'http-status'

import Series from '../models/Series'

export async function createSeries(req, res, next) {
  try {
    const series = new Series(req.body)
    series.user = req.user
    await series.save()
    return res.status(CREATED).json(series)
  } catch (e) {
    return next(e)
  }
}

export async function updateSeries(req, res, next) {
  try {
    const series = await Series.findOneAndUpdate({ _id: req.series }, req.body, { new: true })
    return res.status(ACCEPTED).json(series)
  } catch (e) {
    return next(e)
  }
}

export async function getSeries(req, res, next) {
  try {
    const series = await Series.findOne({ _id: req.series })
    return res.status(OK).json(series)
  } catch (e) {
    return next(e)
  }
}

export async function getAllSerieses(req, res, next) {
  try {
    const { page, limit } = req.pagination
    const series = await Series.fetchPage(
      page,
      limit,
    )
    return res.status(OK).json(series)
  } catch (e) {
    return next(e)
  }
}

export async function deleteSeries(req, res, next) {
  try {
    const series = await Series.findOneAndRemove({ _id: req.series })
    return res.status(ACCEPTED).json(series)
  } catch (e) {
    return next(e)
  }
}

export async function findSeries(req, res, next) {
  try {
    const { id } = req.params
    const series = await Series.findOne({ _id: id })
    if (series) {
      req.series = id
      return next()
    }
    return res.status(NOT_FOUND).json({ message: 'Not found' })
  } catch (e) {
    return next(e)
  }
}

export async function countSeries(req, res, next) {
  const { query } = req
  try {
    const count = await Series.count(query)
    res.status(OK).json({
      count,
    })
  } catch (e) {
    next(e)
  }
}

