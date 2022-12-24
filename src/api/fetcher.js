import axios from "axios";
// создаю кастомный обработчик HTTP-запросов. В baseURL закидываю IP сервера
export const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})