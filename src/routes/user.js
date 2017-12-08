import { Router } from 'express'

import * as userMiddleware from '../middlewares/users'
import { isAuthenticated } from '../middlewares/authentication'

const router = Router()

router.route('/')
  /**
   * @api {get} /api/users/ Get users
   * @apiName GetUsers
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   [
   *     {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "createdAt": "2017-11-23T05:52:51.964Z",
   *       "updatedAt": "2017-12-07T10:29:17.796Z",
   *       "email": "richardeo112@gmail.com",
   *       "username": "frankenstein",
   *       "__v": 0,
   *       "totalWorks": 3,
   *       "status": "kol 5ra",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     }
   *   ]
   */
  .get(userMiddleware.getUsers)

router.route('/:id')
  /**
   * @api {get} /api/users/:id Get user profile
   * @apiName GetUserProfile
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 200 OK
   *   {
   *     "user": {
   *       "_id": "5a166233aeb0e40e70e486c9",
   *       "createdAt": "2017-11-23T05:52:51.964Z",
   *       "updatedAt": "2017-11-25T10:39:48.152Z",
   *       "email": "richardeo112@gmail.com",
   *       "username": "BJ34zyNxM",
   *       "__v": 0,
   *       "totalWorks": 0,
   *       "status": "",
   *       "name": {
   *         "first": "Rashad",
   *         "last": "K-sh"
   *       }
   *     },
   *     "stories": [
   *       {
   *         "_id": "5a1e45e6c0293a23e463c006",
   *         "createdAt": "2017-11-29T05:30:14.044Z",
   *         "updatedAt": "2017-11-29T05:30:35.362Z",
   *         "picture": "1511933414025.jpg",
   *         "author": "5a166233aeb0e40e70e486c9",
   *         "title": "عنوان مؤقت يمكن استبداله في أي وقت",
   *         "description": "عنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقتعنوان مؤقت يمكن استبداله في أي وقت",
   *         "genre": "5a0148cb311cbb22a0c06095",
   *         "removed": false,
   *         "stars": 0,
   *         "parts": [
   *             "5a1e45fbc0293a23e463c007"
   *         ],
   *         "__v": 1
   *       },
   *     ],
   *     "lists": [
   *       {
   *         "_id": "5a240ce6615da01cb0a77abc",
   *         "name": "المفضلة",
   *         "user": "5a240ce6615da01cb0a77abb",
   *         "isDefault": true,
   *         "stories": [],
   *         "__v": 0
   *       }
   *     ]
   *   }
   */
  .get(userMiddleware.getUserProfile)

router.route('/settings/reset')
  /**
   * @api {post} /api/users/settings/reset Change Password
   * @apiName ChangePassword
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam {String} oldpassword the current user password REQUIRED
   * @apiParam {String} password the new password REQUIRED
   * @apiParam {String} confirmpassword the password confirmation REQUIRED
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     message: "Password changed."
   *   }
   */
  .post(isAuthenticated, userMiddleware.changePassword)

router.route('/settings/update')
  /**
   * @api {put} /api/users/settings/reset Update User Info
   * @apiName UpdateUserInfo
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam {String} status the user status
   * @apiParam {String} username a unique username
   * 
   * @apiSuccessExample {json} Success-Response:
   *   HTTP/1.1 202 ACCEPTED
   *   {
   *     message: "Updated User Info"
   *   }
   */
  .put(isAuthenticated, userMiddleware.updateUserInfo)

export default router
