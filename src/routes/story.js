import { Router } from 'express'

import upload from '../middlewares/upload'
import { isAuthenticated } from '../middlewares/authentication'
import * as storyMiddleware from '../middlewares/story'
import paginationMiddleware from '../middlewares/pagination'

const router = Router()

router.param('id', storyMiddleware.findStory)

router.route('/')
  .post(isAuthenticated, upload.single('picture'), storyMiddleware.createStory)
  .get(paginationMiddleware, storyMiddleware.getAllStories)

router.route('/count')
  .get(storyMiddleware.countStories)

router.route('/:id')
  .get(storyMiddleware.getStory)
  .put(isAuthenticated, storyMiddleware.updateStory)
  .delete(isAuthenticated, storyMiddleware.deleteStory)


export default router
