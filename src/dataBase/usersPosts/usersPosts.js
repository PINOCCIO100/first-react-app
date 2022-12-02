import { usersProfileInfo } from '../usersProfileInfo/usersProfileInfo';

import { userPosts as userPosts_1 } from './postsByID/userPosts_1';
import { userPosts as userPosts_2 } from './postsByID/userPosts_2';
import { userPosts as userPosts_3 } from './postsByID/userPosts_3';
import { userPosts as userPosts_4 } from './postsByID/userPosts_4';
import { userPosts as userPosts_5 } from './postsByID/userPosts_5';

class UserPostsClass {
  list = {};
  add(id, userPosts) {
    this.list[id] = userPosts;
  }
}

const usersPosts = new UserPostsClass();
usersPosts.add(1, userPosts_1);
usersPosts.add(2, userPosts_2);
usersPosts.add(3, userPosts_3);
usersPosts.add(4, userPosts_4);
usersPosts.add(5, userPosts_5);


class UsersPostPosterText {
  list = {};
  add(id, text) {
    this.list[id] = text;
  }
  edit(id, func) {
    this.list[id] = func(this.list[id]);
  }
  take(id) {
    return this.list[id];
  }
}

const usersPostPosterText = new UsersPostPosterText();
Object.keys(usersProfileInfo.list).forEach(userID => usersPostPosterText.add(userID, ''));

export { usersPosts, usersPostPosterText }
