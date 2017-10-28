import { Router } from 'express'

import authRoutes from './authentication'
import storyRoutes from './story'
import partRoutes from './part'


const router = Router()

router.use('/auth', authRoutes)
router.use('/stories', storyRoutes)
router.use('/parts', partRoutes)


export default router
