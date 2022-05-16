import { createURL, HttpParams, HttpRequestPut } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpPut(host: string | URL, config: HttpRequestPut) {
  return async <D>(
    endpoint: string,
    { params, data }: { params?: HttpParams<string>; data: D }
  ): Promise<Response> => {
    const requestInit = fetchConfig('PUT', { data, ...config })

    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
