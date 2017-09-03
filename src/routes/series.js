import { Router } from 'express'

import * as seriesMiddleware from '../middlewares/series'

const router = Router()

router.param('id' seriesMiddleware.findSeries)

router.route('/')
	.get(seriesMiddleware.getSerieses)
	.post(seriesMiddleware.createSeries)

router.route('/:id')
	.get(seriesMiddleware.getSeries)
	.put(seriesMiddleware.updateSeries)
	.delete(seriesMiddleware.deleteSeries)

export default router
