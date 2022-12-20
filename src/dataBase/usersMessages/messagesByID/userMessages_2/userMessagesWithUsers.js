import { usersProfileInfo } from '../../../usersProfileInfo/usersProfileInfo';

import userMessagesWithUser_1 from './messagesWithUsersByID/userMessagesWithUser_1';
import userMessagesWithUser_2 from './messagesWithUsersByID/userMessagesWithUser_2';
import userMessagesWithUser_3 from './messagesWithUsersByID/userMessagesWithUser_3';

function UserMessageSenderTextClass(usersProfileInfo) {
  Object.keys(usersProfileInfo).forEach(userID => this[userID] = '');
}

export const userMessagesWithUsers = {};
userMessagesWithUsers[1] = userMessagesWithUser_1;
userMessagesWithUsers[2] = userMessagesWithUser_2;
userMessagesWithUsers[3] = userMessagesWithUser_3;

export const userMessageSenderText = new UserMessageSenderTextClass(usersProfileInfo)
