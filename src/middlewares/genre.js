import { OK, CREATED, ACCEPTED } from 'http-status'

import Genre from '../models/Genre'

export async function getGenres(req, res, next) {
  try {
    const genres = await Genre.find({}).lean()
    res.status(OK).json(genres)
  } catch (e) {
    next(e)
  }
}

export async function createGenre(req, res, next) {
  const { name } = req.body
  try {
    const genre = await Genre.create({ name })
    res.status(CREATED).json(genre)
  } catch (e) {
    next(e)
  }
}

export async function updateGenre(req, res, next) {
  const { name } = req.body
  const { id } = req.params
  try {
    const genre = await Genre.findByIdAndUpdate(id, { name }, { new: true })
    res.status(ACCEPTED).json(genre)
  } catch (e) {
    next(e)
  }
}

export async function deleteGenre(req, res, next) {
  const { id } = req.params
  try {
    const genre = await Genre.findByIdAndRemove(id)
    res.status(ACCEPTED).json(genre)
  } catch (e) {
    next(e)
  }
}
