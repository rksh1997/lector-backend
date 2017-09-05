import { Router } from 'express'

import * as seriesMiddleware from '../middlewares/series'

const router = Router()

router.param('id', seriesMiddleware.findSeries)

router.route('/').post(seriesMiddleware.createSeries).get(seriesMiddleware.getAllSerieses)

router.route('/:id')
  .get(seriesMiddleware.getSeries)
  .put(seriesMiddleware.updateSeries)
  .delete(seriesMiddleware.deleteSeries)


export default router