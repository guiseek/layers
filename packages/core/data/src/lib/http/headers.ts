import { HttpHeader } from './types/header'

/**
 * @deprecated use native Headers instead
 */
export class HttpHeaders {
  private _headers = new Map<HttpHeader, string>([])

  get value(): Partial<Record<HttpHeader, string>> {
    return Object.fromEntries(this._headers.entries())
  }

  set(header: HttpHeader, value: string) {
    this._headers.set(header, value)
  }

  get(header: HttpHeader) {
    return this._headers.get(header)
  }
}
