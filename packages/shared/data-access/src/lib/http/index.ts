import { fetchClient } from './fetch'

export function useHttpClient(api: string) {
  return fetchClient(api)
}
