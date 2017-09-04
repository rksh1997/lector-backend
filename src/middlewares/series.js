import Series from '../models/Series'
import { OK, UNPROCESSABLE_ENTITY, UNAUTHORIZED, NOT_FOUND, CREATED } from 'http-status'


export async function createSeries(req, res, next) {
  try {
    const series = new Series(req.body)
    series.user = req.user
    await series.save()
    return res.status(OK).json(series)
    next()
  } catch (e) {
    return next(e)
  }
}


export async function updateSeries(req, res, next) {
  try {
    const series = await Series.findOneAndUpdate({ _id: req.series }, req.body)
    return res.status(OK).json(series)
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

export async function deleteSeries(req, res, next) {
  const series = await Series.findOneAndRemove({ _id: req.series })
  return res.status(OK).json(series)
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

