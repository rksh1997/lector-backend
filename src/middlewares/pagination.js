export default (req, res, next) => {
  let { page, limit } = req.query
  page = page ? parseInt(page, 10) - 1 : 0
  limit = limit ? parseInt(limit, 10) : 10
  req.pagination = {
    page,
    limit,
  }
  next()
}
