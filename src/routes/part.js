import { Router } from 'express'
import * as partMiddleware from '../middlewares/part'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.param('id', partMiddleware.findPart)

router.route('/')
  .post(isAuthenticated, partMiddleware.createPart)

router.route('/:id')
  .get(partMiddleware.getPart)
  .put(isAuthenticated, partMiddleware.updatePart)
  .delete(isAuthenticated, partMiddleware.deletePart)

export default router
