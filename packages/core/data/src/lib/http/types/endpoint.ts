// export type HttpEndpoint<Path extends string> =
//   Path extends `:${infer Param}/${infer Rest}`
//     ? Param | HttpEndpoint<Rest>
//     : Path extends `:${infer Param}`
//     ? Param
//     : Path extends `${infer Prefix}:${infer Rest}`
//     ? HttpEndpoint<`:${Rest}`>
//     : Path extends `${infer Prefix}`
//     ? Prefix
//     : never
export type HttpEndpoint<Path extends string> =
  Path extends `${infer Protocol}://${infer Host}/${infer Prefix}`
    ? Prefix | HttpEndpoint<Prefix>
    : Path extends `/${infer Host}`
    ? Host
    : Path extends `${infer Host}/${infer Prefix}`
    ? Prefix | HttpEndpoint<Prefix>
    : Path extends `${infer Prefix}/${infer Route}`
    ? Route | HttpEndpoint<Route>
    : never
