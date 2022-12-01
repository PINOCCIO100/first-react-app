import userProfileInfo_1 from './usersByID/userProfileInfo_1';
import userProfileInfo_2 from './usersByID/userProfileInfo_2';
import userProfileInfo_3 from './usersByID/userProfileInfo_3';
import userProfileInfo_4 from './usersByID/userProfileInfo_4';

const currentUserID = 4;

class UsersProfileInfoClass {
  list = {}
  add(id, userProfileInfo) {
    this.list[id] = userProfileInfo;
  }
  getUser = (id) => this.list[id];
}

const usersProfileInfo = new UsersProfileInfoClass();

usersProfileInfo.add(1, userProfileInfo_1);
usersProfileInfo.add(2, userProfileInfo_2);
usersProfileInfo.add(3, userProfileInfo_3);
usersProfileInfo.add(4, userProfileInfo_4);

export { usersProfileInfo, currentUserID };