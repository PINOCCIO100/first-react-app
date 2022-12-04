import userMessagesWithUser_1 from './messagesWithUsersByID/userMessagesWithUser_1';
import userMessagesWithUser_2 from './messagesWithUsersByID/userMessagesWithUser_2';
import userMessagesWithUser_3 from './messagesWithUsersByID/userMessagesWithUser_3';
import userMessagesWithUser_4 from './messagesWithUsersByID/userMessagesWithUser_4';
import userMessagesWithUser_5 from './messagesWithUsersByID/userMessagesWithUser_5';

class UserMessagesWithUsersClass {
  list = {}
  add(id, messsages) {
    this.list[id] = messsages;
  }
}

const userMessagesWithUsers = new UserMessagesWithUsersClass;
userMessagesWithUsers.add(1, userMessagesWithUser_1);
userMessagesWithUsers.add(2, userMessagesWithUser_2);
userMessagesWithUsers.add(3, userMessagesWithUser_3);
userMessagesWithUsers.add(4, userMessagesWithUser_4);
userMessagesWithUsers.add(5, userMessagesWithUser_5);

export default userMessagesWithUsers;