import userPosts_1 from './postsByID/userPosts_1';
import userPosts_2 from './postsByID/userPosts_2';
import userPosts_3 from './postsByID/userPosts_3';
import userPosts_4 from './postsByID/userPosts_4';

class UserPostsClass {
  list = {};
  add(id, userPosts) {
    this.list[id] = userPosts;
  }
}

const usersPosts = new UserPostsClass;

usersPosts.add(1, userPosts_1);
usersPosts.add(2, userPosts_2);
usersPosts.add(3, userPosts_3);
usersPosts.add(4, userPosts_4);

export { usersPosts }