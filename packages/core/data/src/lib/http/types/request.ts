import { HttpMethod } from './method'

export interface HttpRequest<T> extends Omit<RequestInit, 'method'> {
  method?: HttpMethod
  data?: T
}

export type HttpRequestGet = HttpRequest<void> & {
  method?: 'GET'
}
export type HttpRequestHead = HttpRequest<void> & {
  method?: 'HEAD'
}
export type HttpRequestDelete = HttpRequest<void> & {
  method?: 'DELETE'
}
export type HttpRequestPut<T = any> = HttpRequest<T> & {
  method?: 'PUT'
}
export type HttpRequestPost<T = any> = HttpRequest<T> & {
  method?: 'POST'
}
export type HttpRequestPatch<T = any> = HttpRequest<T> & {
  method?: 'PATCH'
}

export interface HttpRequestMap {
  GET: HttpRequestGet
  HEAD: HttpRequestHead
  DELETE: HttpRequestDelete
  PATCH: HttpRequestPatch
  POST: HttpRequestPost
  PUT: HttpRequestPut
}
