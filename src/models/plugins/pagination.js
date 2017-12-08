/* eslint-disable no-param-reassign, no-return-await */
export default (schema) => {
  schema.statics.fetchPage = function (page, limit, query = {}, sort = {}) {
    return this.find(query)
      .skip(page * limit)
      .limit(limit)
      .sort(sort)
  }
}
