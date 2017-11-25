import { Router } from 'express'

import upload from '../middlewares/upload'
import { isAuthenticated } from '../middlewares/authentication'
import * as storyMiddleware from '../middlewares/story'
import paginationMiddleware from '../middlewares/pagination'

const router = Router()

router.param('id', storyMiddleware.findStory)

router.route('/')
  /**
   * @api {post} /api/stories Create new story
   * @apiName CreateStory
   * @apiGroup Story
   * @apiVersion 1.0.0
   *
   * @apiParam {String} title Story's title REQUIRED.
   * @apiParam {String} description Story's short description REQUIRED.
   * @apiParam {String} genre Genre id REQUIRED.
   * @apiParam {Image} picture Story's cover REQUIRED.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 201 CREATED
   *   {
   *     "createdAt": "2017-11-25T13:46:36.541Z",
   *     "updatedAt": "2017-11-25T13:46:36.541Z",
   *     "author": "5a166233aeb0e40e70e486c9",
   *     "title": "Story number 1",
   *     "picture": "https://www.example.com/john.jpeg"
   *     "description": "this is a short description",
   *     "genre": "5a0148cb311cbb22a0c06095",
   *     "_id": "5a19743ceeef190f68704c3a",
   *     "removed": false,
   *     "stars": 0,
   *     "parts": ["5a19743ceeef190f68704c3a"]
   *   }
   */
  .post(isAuthenticated, upload.single('picture'), storyMiddleware.createStory)
  /**
   * @api {get} /api/stories Get stories
   * @apiName GetStories
   * @apiGroup Story
   * @apiVersion 1.0.0
   *
   * @apiParam {Number} page The page number you want to fetch QUERYSTRING.
   * @apiParam {Number} limit How many stories to fetch per page QUERYSTRING.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   [ 
   *     {
   *       "createdAt": "2017-11-25T13:46:36.541Z",
   *       "updatedAt": "2017-11-25T13:46:36.541Z",
   *       "author": "5a166233aeb0e40e70e486c9",
   *       "title": "Story number 1",
   *       "picture": "https://www.example.com/john.jpeg"
   *       "description": "this is a short description",
   *       "genre": "5a0148cb311cbb22a0c06095",
   *       "_id": "5a19743ceeef190f68704c3a",
   *       "removed": false,
   *       "stars": 0,
   *       "parts": ["5a19743ceeef190f68704c3a"]
   *     }
   *   ]
   */
  .get(paginationMiddleware, storyMiddleware.getAllStories)

// TODO: document this
router.route('/count')
  .get(storyMiddleware.countStories)

router.route('/:id')
  /**
   * @api {get} /api/stories/:id Get story
   * @apiName GetStory
   * @apiGroup Story
   * @apiVersion 1.0.0
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "createdAt": "2017-11-25T13:46:36.541Z",
   *     "updatedAt": "2017-11-25T13:46:36.541Z",
   *     "author": "5a166233aeb0e40e70e486c9",
   *     "title": "Story number 1",
   *     "picture": "https://www.example.com/john.jpeg"
   *     "description": "this is a short description",
   *     "genre": "5a0148cb311cbb22a0c06095",
   *     "_id": "5a19743ceeef190f68704c3a",
   *     "removed": false,
   *     "stars": 0,
   *     "parts": ["5a19743ceeef190f68704c3a"]
   *   }
   */
  .get(storyMiddleware.getStory)
  /**
   * @api {put} /api/stories/:id Update story
   * @apiName UpdateStory
   * @apiGroup Story
   * @apiVersion 1.0.0
   *
   * @apiParam {String} title Story's title.
   * @apiParam {String} description Story's short description.
   * @apiParam {String} genre Genre id.
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "createdAt": "2017-11-25T13:46:36.541Z",
   *     "updatedAt": "2017-11-25T13:46:36.541Z",
   *     "author": "5a166233aeb0e40e70e486c9",
   *     "title": "Updated Story",
   *     "picture": "https://www.example.com/john.jpeg"
   *     "description": "this is a short description",
   *     "genre": "5a0148cb311cbb22a0c06095",
   *     "_id": "5a19743ceeef190f68704c3a",
   *     "removed": false,
   *     "stars": 0,
   *     "parts": ["5a19743ceeef190f68704c3a"]
   *   }
   */
  .put(isAuthenticated, storyMiddleware.updateStory)
  /**
   * @api {delete} /api/stories/:id Delete story
   * @apiName DeleteStory
   * @apiGroup Story
   * @apiVersion 1.0.0
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     "createdAt": "2017-11-25T13:46:36.541Z",
   *     "updatedAt": "2017-11-25T13:46:36.541Z",
   *     "author": "5a166233aeb0e40e70e486c9",
   *     "title": "Story number 1",
   *     "picture": "https://www.example.com/john.jpeg"
   *     "description": "this is a short description",
   *     "genre": "5a0148cb311cbb22a0c06095",
   *     "_id": "5a19743ceeef190f68704c3a",
   *     "removed": false,
   *     "stars": 0,
   *     "parts": ["5a19743ceeef190f68704c3a"]
   *   }
   */
  .delete(isAuthenticated, storyMiddleware.deleteStory)


export default router
