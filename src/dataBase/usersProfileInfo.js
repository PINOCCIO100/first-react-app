'Use sctrict';
import userPhoto_1 from '../media/usersPhoto/1/avatar.jpg';
import userPhoto_2 from '../media/usersPhoto/2/avatar.jpg';
import userPhoto_3 from '../media/usersPhoto/3/avatar.jpg';

const currentUserID = 2;

class UsersInfoClass {
  list = {}
  add(id, userInfo) {
    this.list[id] = userInfo;
  }
}

const usersInfo = new UsersInfoClass();

const userInfo_Dima = {
  photo: userPhoto_1,
  name: 'Dmitry K.',
  birthDate: '2 january',
  city: 'Minsk',
  education: 'BSU\'11',
  webSite: 'https://it-kamasutra.com',
};
const userInfo_Rustam = {
  photo: userPhoto_2,
  name: 'Rustam N.',
  birthDate: '08 august',
  city: 'Rsaevo',
  education: 'SPMI\'14',
  webSite: 'https://t.me/rustam_nigmatullin',
};
const userInfo_Kamilya = {
  photo: userPhoto_3,
  name: 'Kamilya Z.',
  birthDate: '14 august',
  city: 'Chirchik',
  education: 'SPMI\'15',
  webSite: 'https://t.me/zagidulya',
};


usersInfo.add(1, userInfo_Dima);
usersInfo.add(2, userInfo_Rustam);
usersInfo.add(3, userInfo_Kamilya);



export { usersInfo, currentUserID };