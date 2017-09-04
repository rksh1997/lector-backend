import request from 'request-promise'

async function reduceRequest(options) {
  const response = await request(options)

  if (response.data) {
    return response.data
  }
  return response
}

/* eslint-disable no-return-await */
export const getJSON = async (url, qs = {}, headers = {}) =>
  await reduceRequest({
    method: 'GET',
    url,
    qs,
    headers,
    json: true,
  })

export const postJSON = async (url, body = {}, headers = {}) =>
  await reduceRequest({
    method: 'POST',
    url,
    body,
    headers,
    json: true,
  })
