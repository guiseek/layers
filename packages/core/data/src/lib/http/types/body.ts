export type HttpBody<T> = T extends object ? Record<keyof T, T[keyof T]> : T
