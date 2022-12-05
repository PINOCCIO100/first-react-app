import { userMessagesWithUsers as userMessages_1, userMessageSenderText as userMessageSenderText_1 } from './messagesByID/userMessages_1/userMessagesWithUsers';
import { userMessagesWithUsers as userMessages_2, userMessageSenderText as userMessageSenderText_2 } from './messagesByID/userMessages_2/userMessagesWithUsers';
import { userMessagesWithUsers as userMessages_3, userMessageSenderText as userMessageSenderText_3 } from './messagesByID/userMessages_3/userMessagesWithUsers';
import { userMessagesWithUsers as userMessages_4, userMessageSenderText as userMessageSenderText_4 } from './messagesByID/userMessages_4/userMessagesWithUsers';
import { userMessagesWithUsers as userMessages_5, userMessageSenderText as userMessageSenderText_5 } from './messagesByID/userMessages_5/userMessagesWithUsers';

class UserMessagesClass {
  list = {}
  add(id, userMessages) {
    this.list[id] = userMessages;
  }
}
class UsersMessageSenderTextClass {
  list = {}
  add(id, text) {
    this.list[id] = text;
  }
}

export const userMessages = new UserMessagesClass();
userMessages.add(1, userMessages_1);
userMessages.add(2, userMessages_2);
userMessages.add(3, userMessages_3);
userMessages.add(4, userMessages_4);
userMessages.add(5, userMessages_5);

export const usersMessageSenderText = new UsersMessageSenderTextClass;
usersMessageSenderText.add(1, userMessageSenderText_1);
usersMessageSenderText.add(2, userMessageSenderText_2);
usersMessageSenderText.add(3, userMessageSenderText_3);
usersMessageSenderText.add(4, userMessageSenderText_4);
usersMessageSenderText.add(5, userMessageSenderText_5);
