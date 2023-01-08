import axios from "axios";
// создаю кастомный обработчик HTTP-запросов. В baseURL закидываю IP сервера
export const REACT_APP_API_URL = 'http://localhost:3001';

export const fetcher = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: REACT_APP_API_URL
})