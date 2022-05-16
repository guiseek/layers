export async function httpRequest(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init)

  if (!response.ok) {
    const err = await response.json()
    throw new Error(err.message)
  }

  return response
}
