/* eslint-disable no-param-reassign, no-return-await */
export default (schema, options) => {
  schema.statics.fetchPage = async function (page, limit, query = {}, sort = {}) {
    const data = await this.find(query)
      .skip(page * limit)
      .limit(limit)
      .sort(sort)
      .populate('author', 'name')
      .exec()

    if (options && options.addPaginationStatus) {
      const count = await this.count(query)
      return {
        data,
        hasNextPage: (page * limit) + limit < count,
        hasPrevPage: page !== 0,
      }
    }

    return data
  }
}
