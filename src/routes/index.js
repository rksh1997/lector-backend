import { Router } from 'express'

import authRoutes from './authentication'
import storyRoutes from './story'
import partRoutes from './part'
import genreRoutes from './genre'


const router = Router()

router.use('/auth', authRoutes)
router.use('/stories', storyRoutes)
router.use('/parts', partRoutes)
router.use('/genres', genreRoutes)


export default router
