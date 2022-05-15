import { HttpHeader } from './types/header';

export class HttpHeaders {
  private _headers = new Map<HttpHeader, string>([]);

  get headers() {
    return Object.fromEntries(this._headers);
  }

  set(header: HttpHeader, value: string) {
    this._headers.set(header, value);
  }

  get(header: HttpHeader) {
    return this._headers.get(header);
  }
}
