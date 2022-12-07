import { usersProfileInfo } from '../../../usersProfileInfo/usersProfileInfo';

import userMessagesWithUser_1 from './messagesWithUsersByID/userMessagesWithUser_1';
import userMessagesWithUser_2 from './messagesWithUsersByID/userMessagesWithUser_2';
import userMessagesWithUser_3 from './messagesWithUsersByID/userMessagesWithUser_3';
import userMessagesWithUser_4 from './messagesWithUsersByID/userMessagesWithUser_4';
import userMessagesWithUser_5 from './messagesWithUsersByID/userMessagesWithUser_5';

function UserMessageSenderTextClass(usersProfileInfo) {
  Object.keys(usersProfileInfo).forEach(userID => this[userID] = '');
}

export const userMessagesWithUsers = {};
userMessagesWithUsers[1] = userMessagesWithUser_1;
userMessagesWithUsers[2] = userMessagesWithUser_2;
userMessagesWithUsers[3] = userMessagesWithUser_3;
userMessagesWithUsers[4] = userMessagesWithUser_4;
userMessagesWithUsers[5] = userMessagesWithUser_5;

export const userMessageSenderText = new UserMessageSenderTextClass(usersProfileInfo)
