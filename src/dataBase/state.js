import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';

const state = {
  currentUserID: currentUserID,
  usersProfileInfo: usersProfileInfo,
  usersPosts: usersPosts,
  userMessages: userMessages,
}

export default state