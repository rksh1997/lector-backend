import { NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status'

export const notFound = (req, res) => {
  res.status(NOT_FOUND).json({
    status: NOT_FOUND,
    message: '404 Not Found',
  })
}

/* eslint-disable no-unused-vars,no-console */
export const productionErrors = (err, req, res, next) => {
  console.log(err.status)
  res.status(err.status || INTERNAL_SERVER_ERROR)
  res.json({
    message: err.message,
    error: {},
  })
}

export const developmentErrors = (err, req, res, next) => {
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack || '',
  }
  res.status(err.status || INTERNAL_SERVER_ERROR).json(errorDetails)
}
