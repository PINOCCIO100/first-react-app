import axios from "axios"

export async function reqUsersList(count, page) {
  return await axios.get(`/api/users?count=${count}&page=${page}`)
}