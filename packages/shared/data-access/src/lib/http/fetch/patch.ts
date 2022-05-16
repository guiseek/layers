import { createURL, HttpParams, HttpRequestPatch } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpPatch(host: string | URL, config: HttpRequestPatch) {
  return async <D>(
    endpoint: string,
    { params, data }: { params?: HttpParams<string>; data: D }
  ): Promise<Response> => {
    const requestInit = fetchConfig('PATCH', { data, ...config })

    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
