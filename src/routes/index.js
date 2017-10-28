import { Router } from 'express'

import authRoutes from './authentication'
import storyRoutes from './story'


const router = Router()

router.use('/auth', authRoutes)
router.use('/stories', storyRoutes)


export default router
