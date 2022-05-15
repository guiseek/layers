export type HttpEndpoint<Path extends string> =
  Path extends `:${infer Param}/${infer Rest}`
    ? Param | HttpEndpoint<Rest>
    : Path extends `:${infer Param}`
    ? Param
    : Path extends `${infer Prefix}:${infer Rest}`
    ? HttpEndpoint<`${Prefix}:${Rest}`>
    : never
