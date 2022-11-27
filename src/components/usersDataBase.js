'Use sctrict';
import userPhoto_1 from './Profile/UserCard/doggo.jpg';
import userPhoto_2 from './Profile/UserCard/rus.JPG';

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


usersInfo.add(1,userInfo_Dima);
usersInfo.add(2,userInfo_Rustam);

export default usersInfo;