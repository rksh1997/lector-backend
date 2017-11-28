import 'babel-polyfill'
import express from 'express'
import bluebird from 'bluebird'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import { join } from 'path'

import apiRoutes from './routes'
import { notFound, developmentErrors, productionErrors } from './middlewares/errorHandlers'
import { DB_URL } from './config'

global.Promise = bluebird
mongoose.Promise = bluebird

const app = express()

// serve static files
app.use('/assets', express.static(join(__dirname, '../uploads')))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', apiRoutes)

// 404 error handler
app.use(notFound)

// 500 error handlers
if (process.env.NODE_ENV === 'development') {
  app.use(developmentErrors)
} else {
  app.use(productionErrors)
}

mongoose.connect(DB_URL, { useMongoClient: true })

/* eslint-disable no-console */
app.listen(process.env.PORT, () => console.log('Server is running'))

export default app
