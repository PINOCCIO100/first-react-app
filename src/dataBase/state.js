import { rerender } from '../render';

import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';


const state = {
  currentUserID: currentUserID,
  usersProfileInfo: usersProfileInfo,
  usersPosts: usersPosts,
  userMessages: userMessages,
  usersPostPosterText: usersPostPosterText,
}
const actions = {
  rerenderApp: () => rerender(state, actions),

  createPost(message) {
    const messageID = state.usersPosts.list[currentUserID.id].length + 1;
    state.usersPosts.list[currentUserID.id].push({
      messageID: messageID,
      userID: currentUserID,
      message: message,
      time: 1,
      rating: {
        likes: 5,
        dislikes: 1,
      }
    });
    this.rerender();
    // rerender(state, actions);  // ререндер всего приложения
  }
}



export { state, actions }
