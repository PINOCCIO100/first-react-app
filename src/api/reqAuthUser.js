import { fetcher } from "./fetcher";

export async function reqAuthUser(userData) {
  return await fetcher.post('/api/auth', userData)
}