export type HttpURL<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | HttpURL<Rest>
    : Path extends `:${infer Param}`
    ? Param
    : Path extends `${infer Prefix}:${infer Rest}`
    ? HttpURL<`:${Rest}`>
    : never
