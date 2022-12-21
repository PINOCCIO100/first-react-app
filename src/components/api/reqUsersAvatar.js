import axios from "axios";

//TODO: Разобраться, почему json файл парсится автоматически

// Если получаем массив с ID пользователей, получаем массив с аватарками (blob-url)
// Если переменную с ID - переменную с аватаркой  
export async function reqUsersAvatar(IDSource) {
  if (Array.isArray(IDSource)) {
    return await axios.post(`api/avatars`, IDSource);
  };
  return await axios.get(`api/avatars/${IDSource}`);
}