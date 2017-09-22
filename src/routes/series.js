import { Router } from 'express'

import { isAuthenticated } from '../middlewares/authentication'
import * as seriesMiddleware from '../middlewares/series'

const router = Router()

router.param('id', seriesMiddleware.findSeries)

router.route('/')
  .post(isAuthenticated, seriesMiddleware.createSeries)
  .get(seriesMiddleware.getAllSerieses)

router.route('/:id')
  .get(seriesMiddleware.getSeries)
  .put(isAuthenticated, seriesMiddleware.updateSeries)
  .delete(isAuthenticated, seriesMiddleware.deleteSeries)


export default router
