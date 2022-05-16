import { TransformRequest, TransformResponse } from './types/transform'
import { HttpMethod } from '@layers/core/data'

export interface Config {
  method: HttpMethod
  url: string
  data: any
  transformRequest: TransformRequest[]
  transformResponse: TransformResponse[]
}

/**
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

/**
 * Response:
 *
 * {
 *   // `data` is the response that was provided by the server
 *   data: {},
 *
 *   // `status` is the HTTP status code from the server response
 *   status: 200,
 *
 *   // `statusText` is the HTTP status message from the server response
 *   statusText: 'OK',
 *
 *   // `headers` the headers that the server responded with
 *   // All header names are lower cased
 *   headers: {},
 *
 *   // `config` is the config that was provided to `axios` for the request
 *   config: {},
 *
 *   // `request` is the request that generated this response
 *   // It is the last ClientRequest instance in node.js (in redirects)
 *   // and an XMLHttpRequest instance the browser
 *   request: {}
 * }
 */
