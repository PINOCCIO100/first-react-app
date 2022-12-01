import userInfo_1 from './usersByID/userProfileInfo_1';
import userInfo_2 from './usersByID/userProfileInfo_2';
import userInfo_3 from './usersByID/userProfileInfo_3';
import userInfo_4 from './usersByID/userProfileInfo_4';

const currentUserID = 4;

class UsersProfileInfoClass {
  list = {}
  add(id, userInfo) {
    this.list[id] = userInfo;
  }
  getUser = (id) => this.list[id];
}

const usersProfileInfo = new UsersProfileInfoClass();

usersProfileInfo.add(1, userInfo_1);
usersProfileInfo.add(2, userInfo_2);
usersProfileInfo.add(3, userInfo_3);
usersProfileInfo.add(4, userInfo_4);

export { usersProfileInfo, currentUserID };