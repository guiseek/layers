import { createURL, HttpParams, HttpRequestHead } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpHead(host: string | URL, config: HttpRequestHead) {
  const requestInit = fetchConfig('HEAD', config)

  return async (
    endpoint: string,
    { params }: { params?: HttpParams<string> }
  ): Promise<Response> => {
    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
