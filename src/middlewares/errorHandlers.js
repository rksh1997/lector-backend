import { NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status'

export const notFound = (req, res) => {
  res.status(NOT_FOUND).json({
    status: NOT_FOUND,
    message: '404 Not Found',
  })
}

/* eslint-disable no-unused-vars,no-console */
export const productionErrors = (err, req, res, next) => {
  res.status(err.status || INTERNAL_SERVER_ERROR)
  res.json({
    message: err.message,
    status: err.status,
    error: {},
  })
}

export const developmentErrors = (err, req, res, next) => {
  console.log(err.stack)
  res.status(err.status || INTERNAL_SERVER_ERROR).json({
    message: err.message,
    status: err.status,
    error: err.stack,
  })
}
