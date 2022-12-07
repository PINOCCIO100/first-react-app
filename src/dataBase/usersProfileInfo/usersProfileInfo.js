import userProfileInfo_1 from './usersByID/userProfileInfo_1';
import userProfileInfo_2 from './usersByID/userProfileInfo_2';
import userProfileInfo_3 from './usersByID/userProfileInfo_3';
import userProfileInfo_4 from './usersByID/userProfileInfo_4';
import userProfileInfo_5 from './usersByID/userProfileInfo_5';

// ID текущего пользователя
export let currentUserID = 2;

// class UsersProfileInfoClass {
//   list = {}
//   add(id, userProfileInfo) {
//     this.list[id] = userProfileInfo;
//   }
//   getUser = (id) => this.list[id];
// }

// export const usersProfileInfo = new UsersProfileInfoClass();

export const usersProfileInfo = {};
usersProfileInfo[1] = userProfileInfo_1;
usersProfileInfo[2] = userProfileInfo_2;
usersProfileInfo[3] = userProfileInfo_3;
usersProfileInfo[4] = userProfileInfo_4;
usersProfileInfo[5] = userProfileInfo_5;
