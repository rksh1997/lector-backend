import { Router } from 'express'
import * as partMiddleware from '../middlewares/part'
import * as commentMiddleware from '../middlewares/comment'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.param('id', partMiddleware.findPart)
router.param('cid', commentMiddleware.findComment)

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

router.route('/:id/comments')
  /**
   * @api {get} /api/parts/:id/comments Get part's comments
   * @apiName GetComments
   * @apiGroup Comment
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   [
   *     {
   *       "_id": "5a1fdbcf5c4486135874d268",
   *       "createdAt": "2017-11-30T10:22:07.244Z",
   *       "updatedAt": "2017-11-30T10:22:07.244Z",
   *       "part": "5a1e45fbc0293a23e463c007",
   *       "author": {
   *         "_id": "5a166233aeb0e40e70e486c9",
   *         "name": {
   *           "first": "Rashad",
   *           "last": "K-sh"
   *         }
   *       },
   *       "content": "second comment",
   *       "totalLikes": 0
   *     }
   *   ]
   */
  .get(commentMiddleware.getComments)
  /**
   * @api {post} /api/parts/:id/comments Create new comment
   * @apiName CreateComment
   * @apiGroup Comment
   * @apiVersion 1.0.0
   *
   * @apiParam {String} content Comment's content REQUIRED.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 201 CREATED
   *   {
   *     "content": "second comment",
   *     "createdAt": "2017-11-30T10:22:07.244Z",
   *     "part": "5a1e45fbc0293a23e463c007",
   *     "author": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     }
   *   }
   */
  .post(isAuthenticated, commentMiddleware.createComment)

router.route('/:id/comments/:cid')
  /**
   * @api {get} /api/parts/:id/comments/:cid Get comment
   * @apiName GetComment
   * @apiGroup Comment
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "content": "a comment",
   *     "createdAt": "2017-11-30T10:22:07.244Z",
   *     "part": "5a1e45fbc0293a23e463c007",
   *     "author": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     }
   *   }
   */
  .get(commentMiddleware.getComment)
  /**
   * @api {put} /api/parts/:id/comments/:cid Update comment
   * @apiName UpdateComment
   * @apiGroup Comment
   * @apiVersion 1.0.0
   *
   * @apiParam {String} content Comment's content.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "content": "updated comment",
   *     "createdAt": "2017-11-30T10:22:07.244Z",
   *     "part": "5a1e45fbc0293a23e463c007",
   *     "author": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     }
   *   }
   */
  .put(isAuthenticated, commentMiddleware.updateComment)
  /**
   * @api {delete} /api/parts/:id/comments/:cid Delete comment
   * @apiName DeleteComment
   * @apiGroup Comment
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "content": "updated comment",
   *     "createdAt": "2017-11-30T10:22:07.244Z",
   *     "part": "5a1e45fbc0293a23e463c007",
   *     "author": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     }
   *   }
   */
  .delete(isAuthenticated, commentMiddleware.deleteComment)

export default router
