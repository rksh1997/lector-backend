import { Router } from 'express'

import authRoutes from './authentication'
import seriesRoutes from './series'


const router = Router()

router.use('/auth', authRoutes)
router.use('/series', seriesRoutes)


export default router
