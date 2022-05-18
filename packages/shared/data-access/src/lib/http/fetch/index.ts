import { HttpOptions } from '@layers/core/data'
import { httpDelete } from './delete'
import { httpPatch } from './patch'
import { httpPost } from './post'
import { httpHead } from './head'
import { httpPut } from './put'
import { httpGet } from './get'

export function fetchClient(url: string, defaultOptions: HttpOptions = {}) {
  return {
    get: httpGet(url, defaultOptions),
    head: httpHead(url, defaultOptions),
    post: httpPost(url, defaultOptions),
    put: httpPut(url, defaultOptions),
    patch: httpPatch(url, defaultOptions),
    delete: httpDelete(url, defaultOptions),
  }
}
