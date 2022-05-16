import {
  HttpMethod,
  HttpRequestGet,
  HttpRequestDelete,
  HttpRequestPatch,
  HttpRequestPost,
  HttpRequestHead,
  HttpRequestPut,
} from '@layers/core/data'

type FetchConfigMap = {
  GET: HttpRequestGet
  DELETE: HttpRequestDelete
  PATCH: HttpRequestPatch
  POST: HttpRequestPost
  HEAD: HttpRequestHead
  PUT: HttpRequestPut
}

export function fetchConfig<M extends HttpMethod>(
  method: M,
  opts: FetchConfigMap[M]
): RequestInit {
  let { body, data, headers = [] } = opts

  if (body) body = JSON.stringify(body)
  if (data) data = JSON.stringify(data)

  headers = new Headers(headers)

  if (headers.get('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  return {
    ...opts,
    method,
    headers,
    body: body ?? data,
  }
}
