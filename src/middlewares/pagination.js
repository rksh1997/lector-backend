export default (req, res, next) => {
  let { page, limit } = req.query
  page = page ? Math.max(0, parseInt(page, 10) - 1) : 0
  limit = limit ? Math.min(50, parseInt(limit, 10)) : 10
  req.pagination = {
    page,
    limit,
  }
  next()
}
