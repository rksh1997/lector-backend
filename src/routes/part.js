import { Router } from 'express'
import * as partMiddleware from '../middlewares/part'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.param('id', partMiddleware.findPart)

router.route('/')
  /**
   * @api {post} /api/parts Create new part
   * @apiName CreatePart
   * @apiGroup Part
   * @apiVersion 1.0.0
   *
   * @apiParam {String} title Part's title REQUIRED.
   * @apiParam {String} content Part's html content REQUIRED.
   * @apiParam {[String]} tags An array containing part's tags.
   * @apiParam {String} storyId The id of the story to add this part to REQUIRED.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 201 CREATED
   *   {
   *     "createdAt": "2017-11-25T13:32:08.880Z",
   *     "updatedAt": "2017-11-25T13:32:08.880Z",
   *     "title": "Part 1",
   *     "content": "<h1>Hello, World</h1>",
   *     "story": "5a1836cdc1085f25f43be705",
   *     "_id": "5a1970d8a010db054c238c66",
   *     "removed": false,
   *     "tags": [
   *         "Hello",
   *         "World"
   *     ],
   *     "dislikes": 0,
   *     "likes": 0
   *   }
   */
  .post(isAuthenticated, partMiddleware.createPart)

router.route('/:id')
  /**
   * @api {get} /api/parts/:id Get part
   * @apiName GetPart
   * @apiGroup Part
   * @apiVersion 1.0.0
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "createdAt": "2017-11-25T13:32:08.880Z",
   *     "updatedAt": "2017-11-25T13:32:08.880Z",
   *     "title": "Part 1",
   *     "content": "<h1>Hello, World</h1>",
   *     "story": "5a1836cdc1085f25f43be705",
   *     "_id": "5a1970d8a010db054c238c66",
   *     "removed": false,
   *     "tags": [
   *         "Hello",
   *         "World"
   *     ],
   *     "dislikes": 0,
   *     "likes": 0
   *   }
   */
  .get(partMiddleware.getPart)
  /**
   * @api {put} /api/parts/:id Update part
   * @apiName UpdatePart
   * @apiGroup Part
   * @apiVersion 1.0.0
   *
   * @apiParam {String} title Part's title.
   * @apiParam {String} content Part's html content.
   * @apiParam {[String]} tags An array containing part's tags.
   * @apiParam {String} storyId The id of the story to add this part to.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "createdAt": "2017-11-25T13:32:08.880Z",
   *     "updatedAt": "2017-11-25T13:32:08.880Z",
   *     "title": "Updated part",
   *     "content": "<h1>Hello, World, Updated</h1>",
   *     "story": "5a1836cdc1085f25f43be705",
   *     "_id": "5a1970d8a010db054c238c66",
   *     "removed": false,
   *     "tags": [
   *         "Hello",
   *         "World"
   *     ],
   *     "dislikes": 0,
   *     "likes": 0
   *   }
   */
  .put(isAuthenticated, partMiddleware.updatePart)
  /**
   * @api {delete} /api/parts/:id Delete part
   * @apiName Delete Part
   * @apiGroup Part
   * @apiVersion 1.0.0
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "createdAt": "2017-11-25T13:32:08.880Z",
   *     "updatedAt": "2017-11-25T13:32:08.880Z",
   *     "title": "Part 1",
   *     "content": "<h1>Hello, World</h1>",
   *     "story": "5a1836cdc1085f25f43be705",
   *     "_id": "5a1970d8a010db054c238c66",
   *     "removed": false,
   *     "tags": [
   *         "Hello",
   *         "World"
   *     ],
   *     "dislikes": 0,
   *     "likes": 0
   *   }
   */
  .delete(isAuthenticated, partMiddleware.deletePart)

export default router
