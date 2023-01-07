//TODO: Разобраться, почему json файл парсится автоматически

import { fetcher } from "./fetcher";

// Если получаем массив с ID пользователей, получаем массив с аватарками (blob-url)
// Если переменную с ID - переменную с аватаркой  

// const template = async (userID) => {
//   const req = `${process.env.REACT_APP_API_URL}/avatars/${userID}/avatar.jpg`;
//   try { await fetcher.get(req).then(res => res.status) }
//   catch (e) { return undefined }
//   return req;
// }

const template = async (userID) => {
  return await fetcher.get(`/api/avatars/${userID}`).then(res => res);
}

export async function reqUsersAvatar(IDSource) {
  if (Array.isArray(IDSource)) {
    const res = [];
    for (let i = 0; i < IDSource.length; i++) {
      const x = await template(IDSource[i]);
      // console.log(x);
      res[i] = x.data;
    }
    return res;
  };
  return await template(IDSource);
}