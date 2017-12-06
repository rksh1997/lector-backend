import { Router } from 'express'
import * as partMiddleware from '../middlewares/part'
import * as commentMiddleware from '../middlewares/comment'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.param('id', partMiddleware.findPart)
router.param('cid', commentMiddleware.findComment)

router.route('/')

  .post(isAuthenticated, partMiddleware.createPart)

router.route('/:id')
  
  .get(partMiddleware.getPart)
  
  .delete(isAuthenticated, partMiddleware.deletePart)

router.route('/:id/comments')
  
  .get(commentMiddleware.getComments)
  .post(isAuthenticated, commentMiddleware.createComment)

router.route('/:id/comments/:cid')
  .get(commentMiddleware.getComment)
  .put(isAuthenticated, commentMiddleware.updateComment)
  .delete(isAuthenticated, commentMiddleware.deleteComment)

export default router
