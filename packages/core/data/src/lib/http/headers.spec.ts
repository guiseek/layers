import { HttpHeaders } from './headers'

describe('HttpHeaders', () => {
  let headers: HttpHeaders

  beforeEach(() => {
    headers = new HttpHeaders()
  })

  it('should create instance', () => {
    expect(headers).toBeInstanceOf(HttpHeaders)
  })

  it('should add Content-Type', () => {
    headers.set('Content-Type', 'application/json')

    expect(headers.get('Content-Type')).toBe('application/json')
  })

  it('should return undefined', () => {
    expect(headers.get('Accept')).toBeUndefined()
  })
})
