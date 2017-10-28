import { Router } from 'express'

import { isAuthenticated } from '../middlewares/authentication'
import * as seriesMiddleware from '../middlewares/story'
import paginationMiddleware from '../middlewares/pagination'

const router = Router()

router.param('id', seriesMiddleware.findStory)

router.route('/')
  .post(isAuthenticated, seriesMiddleware.createStory)
  .get(paginationMiddleware, seriesMiddleware.getAllStories)

router.route('/count')
  .get(seriesMiddleware.countStories)

router.route('/:id')
  .get(seriesMiddleware.getStory)
  .put(isAuthenticated, seriesMiddleware.updateStory)
  .delete(isAuthenticated, seriesMiddleware.deleteStory)


export default router
