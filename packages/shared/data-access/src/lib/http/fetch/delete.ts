import { createURL, HttpParams, HttpRequestDelete } from '@layers/core/data'
import { fetchConfig } from './config'
import { httpRequest } from './request'

export function httpDelete(host: string | URL, config: HttpRequestDelete) {
  const requestInit = fetchConfig('DELETE', config)

  return async (
    endpoint: string,
    { params }: { params?: HttpParams<string> }
  ): Promise<Response> => {
    const url = createURL(endpoint, params, host)

    return httpRequest(url.toString(), requestInit)
  }
}
