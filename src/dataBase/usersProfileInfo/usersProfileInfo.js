import userProfilePhoto_1 from '../../media/usersPhoto/1/avatar.jpg';
import userProfilePhoto_2 from '../../media/usersPhoto/2/avatar.jpg';
import userProfilePhoto_3 from '../../media/usersPhoto/3/avatar.jpg';

// ID текущего пользователя
// export let currentUserID = 2;

export const usersProfileInfo = {
  1: {
    id: 1,
    name: "Dmitry Kochetkov",
    photo: userProfilePhoto_1,
    username: "Dima_K",
    email: "Sincere@april.biz",
    address: {
      street: "Sovetskaya",
      city: "Minsk",
    },
    phone: "1-770-736-8031 x56442",
    website: "https://it-kamasutra.com",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered 5client-server neural-net",
    }
  },
  2: {
    id: 2,
    name: "Rustam Nigmatullin",
    photo: userProfilePhoto_2,
    username: "Rustam_N",
    email: "Rus89.92@mail.ru",
    address: {
      street: "Speranskogo st.",
      city: "Tyumen",
    },
    phone: "+7(922)-282-17-82",
    website: "https://t.me/rustam_nigmatullin",
    company: {
      name: "TPRC",
      catchPhrase: "Tyumen Petroleum Research Center",
    }
  },
  3: {
    id: 3,
    name: "Kamilya Zagidulina",
    photo: userProfilePhoto_3,
    username: "Kamilya_Z",
    email: "Zagidulina.K@mail.ru",
    address: {
      street: "Speranskogo st.",
      city: "Tyumen",
    },
    phone: "+7(922)-099-11-81",
    website: "https://t.me/zagidulya",
    company: {
      name: "Freelance",
      catchPhrase: "land cadastre",
    }
  }
}

// usersProfileInfo.forEach(profile => {
//   profile.photo = profile.photo ?? `https://picsum.photos/seed/${profile.name}/200/300`
// });

export const usersProfileInfoDefault = [
  {
    id: 4206901,
    name: "Dmitry Kochetkov",
    photo: userProfilePhoto_1,
    username: "Dima_K",
    email: "Sincere@april.biz",
    address: {
      street: "Sovetskaya",
      city: "Minsk",
    },
    phone: "1-770-736-8031 x56442",
    website: "https://it-kamasutra.com",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered 5client-server neural-net",
    }
  },
  {
    id: 4206902,
    name: "Rustam Nigmatullin",
    photo: userProfilePhoto_2,
    username: "Rustam_N",
    email: "Rus89.92@mail.ru",
    address: {
      street: "Speranskogo st.",
      city: "Tyumen",
    },
    phone: "+7(922)-282-17-82",
    website: "https://t.me/rustam_nigmatullin",
    company: {
      name: "TPRC",
      catchPhrase: "Tyumen Petroleum Research Center",
    }
  },
  {
    id: 4206903,
    name: "Kamilya Zagidulina",
    photo: userProfilePhoto_3,
    username: "Kamilya_Z",
    email: "Zagidulina.K@mail.ru",
    address: {
      street: "Speranskogo st.",
      city: "Tyumen",
    },
    phone: "+7(922)-099-11-81",
    website: "https://t.me/zagidulya",
    company: {
      name: "Freelance",
      catchPhrase: "land cadastre",
    }
  }
]