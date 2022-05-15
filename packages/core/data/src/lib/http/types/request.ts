import { HttpBody } from './body'

export type HttpRequestGet = RequestInit
export type HttpRequestDelete = RequestInit
export type HttpRequestPut<T = Record<string, string>> = RequestInit & {
  data: HttpBody<T>
}
export type HttpRequestPost<T = Record<string, string>> = RequestInit & {
  data: HttpBody<T>
}
export type HttpRequestPatch<T = Record<string, string>> = RequestInit & {
  data?: HttpBody<T>
}
