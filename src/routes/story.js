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
   *       "_id": "5a290f6ef0798514885e882e",
   *       "createdAt": "2017-12-07T09:52:46.347Z",
   *       "updatedAt": "2017-12-07T09:54:21.397Z",
   *       "picture": "1512640366328.jpg",
   *       "author": {
   *         "_id": "5a166233aeb0e40e70e486c9",
   *         "name": {
   *           "first": "Rashad",
   *           "last": "K-sh"
   *         }
   *       },
   *       "title": "ذات الرداء الأحمر",
   *       "description": "ذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها،\r\nذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها",
   *       "genre": "5a0148e9311cbb22a0c06099",
   *       "__v": 1,
   *       "removed": false,
   *       "stars": 0,
   *       "parts": [
   *         "5a290fcdf0798514885e882f"
   *       ]
   *     }
   *   ]
   */
  .get(paginationMiddleware, storyMiddleware.getAllStories)

// TODO: document this
router.route('/:id/parts')
  .get(storyMiddleware.getStoryParts)

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
   *     "_id": "5a290f6ef0798514885e882e",
   *     "createdAt": "2017-12-07T09:52:46.347Z",
   *     "updatedAt": "2017-12-07T09:54:21.397Z",
   *     "picture": "1512640366328.jpg",
   *     "author": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     },
   *     "title": "ذات الرداء الأحمر",
   *     "description": "ذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها،\r\nذات الرداء الاحمر، او المعروفة بقصة ليلى والذئب، تطلب منها امها ايصال بعض الاكل لجدتها وفي الطريق تلتقي بالذئب الذي يسبقها الى جدتها ويأكلها، ثم عندما تصل ليلى الى منزل جدتها تجد الذئب يأكل جدتها وتساعده بأكلها لانها كانت تكرهها",
   *     "genre": "5a0148e9311cbb22a0c06099",
   *     "__v": 1,
   *     "removed": false,
   *     "stars": 0,
   *     "parts": [
   *       "5a290fcdf0798514885e882f"
   *     ]
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
