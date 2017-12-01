import { Router } from 'express'

import * as userMiddleware from '../middlewares/users'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.route('/:id')
  .get(isAuthenticated, userMiddleware.getUser)

router.route('/:id/profile')
  .get(userMiddleware.getUserProfile)

export default router
