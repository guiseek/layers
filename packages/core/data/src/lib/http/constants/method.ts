import { HttpMethod } from '../types/method'

export const HTTP_METHOD: Record<HttpMethod, HttpMethod> = {
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  GET: 'GET',
}
