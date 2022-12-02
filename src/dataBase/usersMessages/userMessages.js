import userMessages_1 from './messagesByID/userMessages_1';
import userMessages_2 from './messagesByID/userMessages_2';
import userMessages_3 from './messagesByID/userMessages_3';
import userMessages_4 from './messagesByID/userMessages_4';
import userMessages_5 from './messagesByID/userMessages_5';

class UserMessagesClass {
  list = {}
  add(id, userMessages) {
    this.list[id] = userMessages;
  }
}

const userMessages = new UserMessagesClass();

userMessages.add(1, userMessages_1);
userMessages.add(2, userMessages_2);
userMessages.add(3, userMessages_3);
userMessages.add(4, userMessages_4);
userMessages.add(5, userMessages_5);

export { userMessages }