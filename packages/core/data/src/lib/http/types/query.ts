import { HttpURL } from './url'

export type HttpQuery<Path extends string> = {
  [K in HttpURL<Path>]: string | number | boolean
}
