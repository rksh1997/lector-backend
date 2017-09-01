import { Router } from 'express'

import * as authMiddleware from '../middlewares/authentication'

const router = Router()

router.post('/register',
  authMiddleware.register,
  authMiddleware.createAuthToken,
)

export default router
