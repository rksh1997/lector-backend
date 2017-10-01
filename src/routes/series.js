import { Router } from 'express'

import { isAuthenticated } from '../middlewares/authentication'
import * as seriesMiddleware from '../middlewares/series'
import paginationMiddleware from '../middlewares/pagination'

const router = Router()

router.param('id', seriesMiddleware.findSeries)

router.route('/')
  .post(isAuthenticated, seriesMiddleware.createSeries)
  .get(paginationMiddleware, seriesMiddleware.getAllSerieses)

router.route('/count')
  .get(seriesMiddleware.countSeries)

router.route('/:id')
  .get(seriesMiddleware.getSeries)
  .put(isAuthenticated, seriesMiddleware.updateSeries)
  .delete(isAuthenticated, seriesMiddleware.deleteSeries)


export default router
