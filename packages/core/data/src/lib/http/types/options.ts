import { HttpParams } from './params'

export type HttpOptions<T = any> = {
  params?: HttpParams<string> | undefined
  data?: T
}
