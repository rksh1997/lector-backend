import { Router } from 'express'

import * as authMiddleware from '../middlewares/authentication'
import { createDefaultLists } from '../middlewares/list'

const router = Router()

/**
 * @api {post} /api/auth/register Register new user
 * @apiName Register
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name[first] User's firstname REQUIRED.
 * @apiParam {String} name[last] User's lastname REQUIRED.
 * @apiParam {String} avatar User's pircture url.
 * @apiParam {String} email User's unique email REQUIRED.
 * @apiParam {String} password User's password REQUIRED.
 * 
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "user": {
 *       "_id": "5a19676854f7c9267c13ade1",
 *       "username": "HJeOw1vlG",
 *       "email": "john@doe.com"
 *     },
 *     "token": "tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ"
 *   }
 */
router.post('/register',
  authMiddleware.register,
  createDefaultLists,
  authMiddleware.createAuthToken,
)

/**
 * @api {post} /api/auth/login Login user
 * @apiName Login
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email User's email REQUIRED.
 * @apiParam {String} password User's password REQUIRED.
 * 
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "user": {
 *       "_id": "5a19676854f7c9267c13ade1",
 *       "username": "HJeOw1vlG",
 *       "email": "john@doe.com"
 *     },
 *     "token": "tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ"
 *   }
 */
router.post('/login',
  authMiddleware.login,
  authMiddleware.createAuthToken,
)

/**
 * @api {post} /api/auth/facebook Register/Login with facebook
 * @apiName Facebook-Login
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} token User's Facebook account token REQUIRED.
 * 
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "user": {
 *       "_id": "5a19676854f7c9267c13ade1",
 *       "username": "HJeOw1vlG",
 *       "email": "john@doe.com"
 *     },
 *     "token": "tbJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE5Njc2ODU0ZjdjOTI2N2MxM2FkZTEiLCJ1c2VybmFtZSI6IkhKZU93MXZsRyIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWF0IjoxNTExNjE0MzEyfQ.KCDKLqAhz1JYfWm9J_fgSBHnu2MlvDfwOv6_Zcpq6NQ"
 *   }
 */
router.post('/facebook',
  authMiddleware.loginFacebook,
  createDefaultLists,
  authMiddleware.createAuthToken,
)

/**
 * @api {post} /api/auth/forgot Request reset password email
 * @apiName Forgot-Password
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email User's email.
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 204 No-Content
 */
router.post('/forgot',
  authMiddleware.resetPasswordRequest,
)

/**
 * @api {post} /api/auth/reset Reset Password
 * @apiName Reset-Password
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} password User's new password.
 * @apiParam {String} token The token we've sent to the email.
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 202 ACCEPTED
 */
router.post('/reset',
  authMiddleware.resetPassword,
)

export default router
