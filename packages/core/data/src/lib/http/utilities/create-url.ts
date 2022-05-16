import { HttpQuery } from '../types/query'

export function createURL<U extends string>(
  endpoint: U,
  params?: HttpQuery<U>,
  parent?: string | URL
) {
  const url = new URL(endpoint, parent)

  if (params) {
    const urlParams = Object.entries(params)
    urlParams.forEach(([key, val]) => {
      url.searchParams.set(key, `${val}`)
    })
  }

  return url
}
