import { usersProfileInfo } from '../usersProfileInfo/usersProfileInfo';

import { userPosts as userPosts_1 } from './postsByID/userPosts_1';
import { userPosts as userPosts_2 } from './postsByID/userPosts_2';
import { userPosts as userPosts_3 } from './postsByID/userPosts_3';
import { userPosts as userPosts_4 } from './postsByID/userPosts_4';
import { userPosts as userPosts_5 } from './postsByID/userPosts_5';


function UsersPostPosterTextClass(usersProfileInfo) {
  Object.keys(usersProfileInfo).forEach(userID => this[userID] = '');
}

export const usersPosts = {};
usersPosts[1] = userPosts_1;
usersPosts[2] = userPosts_2;
usersPosts[3] = userPosts_3;
usersPosts[4] = userPosts_4;
usersPosts[5] = userPosts_5;

export const usersPostPosterText = new UsersPostPosterTextClass(usersProfileInfo);

