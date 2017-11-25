import { Router } from 'express'

import * as authMiddleware from '../middlewares/authentication'

const router = Router()

router.post('/register',
  authMiddleware.register,
  authMiddleware.createAuthToken,
)

router.post('/login',
  authMiddleware.login,
  authMiddleware.createAuthToken,
)

router.post('/facebook',
  authMiddleware.loginFacebook,
  authMiddleware.createAuthToken,
)

router.post('/forgot',
  authMiddleware.resetPasswordRequest,
)

router.post('/reset',
  authMiddleware.resetPassword,
)

export default router
