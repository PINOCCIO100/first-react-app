import { usersProfileInfo } from '../usersProfileInfo/usersProfileInfo';

import userMessages_1 from './messagesByID/userMessages_1/userMessagesWithUsers';
import userMessages_2 from './messagesByID/userMessages_2/userMessagesWithUsers';
import userMessages_3 from './messagesByID/userMessages_3/userMessagesWithUsers';
import userMessages_4 from './messagesByID/userMessages_4/userMessagesWithUsers';
import userMessages_5 from './messagesByID/userMessages_5/userMessagesWithUsers';

class UserMessagesClass {
  list = {}
  add(id, userMessages) {
    this.list[id] = userMessages;
  }
}
class UsersMessageSenderTextClass {
  list = {}
  constructor(usersProfileInfo) {
    Object.keys(usersProfileInfo.list).forEach(userID => this.add(userID, ''));
  }
  add(id, text) {
    this.list[id] = text;
  }
  edit(id, text) {
    this.list[id] = text;
  }
  take(id) {
    return this.list[id];
  }
}


export const userMessages = new UserMessagesClass();
userMessages.add(1, userMessages_1);
userMessages.add(2, userMessages_2);
userMessages.add(3, userMessages_3);
userMessages.add(4, userMessages_4);
userMessages.add(5, userMessages_5);

export const usersMessageSenderText = new UsersMessageSenderTextClass(usersProfileInfo)
