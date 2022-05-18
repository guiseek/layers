import { HttpOptions } from './options'

export type HttpClientFn<T> = (
  endpoint: string,
  options: HttpOptions<T>
) => Promise<Response>
