export type TransformRequest = <D, H>(data: D, headers: H) => D
export type TransformResponse = <D>(data: D) => D
