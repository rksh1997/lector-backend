import { Router } from 'express'

import * as genreMiddleware from '../middlewares/genre'

const router = Router()

router.route('/')
  /**
   * @api {get} /api/genres Get stories' genres
   * @apiName GetGenres
   * @apiGroup Genre
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   [
   *     {
   *       "_id": "5a0148cb311cbb22a0c06095",
   *       "name": "أكشن",
   *     }
   *   ]
   */
  .get(genreMiddleware.getGenres)
  /**
   * @api {post} /api/genres Create new genre
   * @apiName CreateGenre
   * @apiGroup Genre
   * @apiVersion 1.0.0
   * @apiDescription private route can only be used by the admin
   *
   * @apiParam {String} name Genre's name REQUIRED.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 201 CREATED
   *   {
   *     "_id": "5a0148cb311cbb22a0c06095",
   *     "name": "أكشن",
   *   }
   */
  .post(genreMiddleware.createGenre)

router.route('/:id')
  /**
   * @api {put} /api/genres/:id Update genre
   * @apiName UpdateGenre
   * @apiGroup Genre
   * @apiVersion 1.0.0
   * @apiDescription private route can only be used by the admin
   *
   * @apiParam {String} name Genre's name REQUIRED.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "_id": "5a0148cb311cbb22a0c06095",
   *     "name": "أكشن",
   *   }
   */
  .put(genreMiddleware.updateGenre)
  /**
   * @api {delete} /api/genres/:id Delete genre
   * @apiName DeteleGenre
   * @apiGroup Genre
   * @apiVersion 1.0.0
   * @apiDescription private route can only be used by the admin
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "_id": "5a0148cb311cbb22a0c06095",
   *     "name": "أكشن",
   *   }
   */
  .delete(genreMiddleware.deleteGenre)

export default router
