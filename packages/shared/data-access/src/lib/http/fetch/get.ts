import { createURL, HttpParams, HttpRequestGet } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpGet(host: string | URL, config: HttpRequestGet) {
  const requestInit = fetchConfig('GET', config)

  return async (
    endpoint: string,
    { params }: { params?: HttpParams<string> }
  ): Promise<Response> => {
    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
