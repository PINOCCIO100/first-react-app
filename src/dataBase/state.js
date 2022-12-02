import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';
import { rerender } from '../render';

const state = {
  currentUserID: currentUserID,
  usersProfileInfo: usersProfileInfo,
  usersPosts: usersPosts,
  userMessages: userMessages,

}
const actions = {
  createPost(message) {
    const messageID = state.usersPosts.list[currentUserID].length + 1;
    state.usersPosts.list[currentUserID].push({
      messageID: messageID,
      userID: currentUserID,
      message: message,
      time: 1,
      rating: {
        likes: 5,
        dislikes: 1,
      }
    });
    rerender(state, actions);
  }
}

export { state, actions }
