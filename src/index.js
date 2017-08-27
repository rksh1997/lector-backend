import express from 'express'
import bluebird from 'bluebird'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
global.Promise = bluebird
mongoose.Promise = bluebird

const app = express()

app.get('/', (req, res) => {
  res.end('Hello, World!')
})

/* eslint-disable no-console */
app.listen(7000, () => console.log('Server is running'))
