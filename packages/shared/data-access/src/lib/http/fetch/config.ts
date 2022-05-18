import { HttpMethod, HttpRequestMap } from '@layers/core/data'

export function fetchConfig<M extends HttpMethod>(
  method: M,
  opts: HttpRequestMap[M]
): RequestInit {
  let { body, data, headers = [] } = opts

  if (body) body = JSON.stringify(body)
  if (data) data = JSON.stringify(data)

  headers = new Headers(headers)

  if (!headers.get('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  return {
    ...opts,
    method,
    headers,
    body: body ?? data,
  }
}
