import { Router } from 'express'

import * as genreMiddleware from '../middlewares/genre'

const router = Router()

router.route('/')
  .get(genreMiddleware.getGenres)

// TODO: protect those so that only admin can use them
  .post(genreMiddleware.createGenre)

router.route('/:id')
  .put(genreMiddleware.updateGenre)
  .delete(genreMiddleware.deleteGenre)

export default router
