import { Router } from 'express'

import authRoutes from './authentication'

const router = Router()

router.use('/auth', authRoutes)

export default router
