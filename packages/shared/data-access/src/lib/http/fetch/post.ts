import { createURL, HttpParams, HttpRequestPost } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpPost(host: string | URL, config: HttpRequestPost) {
  return async <D>(
    endpoint: string,
    { params, data }: { params?: HttpParams<string>; data: D }
  ): Promise<Response> => {
    const requestInit = fetchConfig('POST', { data, ...config })

    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
