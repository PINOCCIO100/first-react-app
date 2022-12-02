
import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';

export const subscriber = (obsever) => {
  actions.rerenderApp = obsever;
}

export const state = {
  currentUserID: currentUserID,
  usersProfileInfo: usersProfileInfo,
  usersPosts: usersPosts,
  userMessages: userMessages,
  usersPostPosterText: usersPostPosterText,
}
export const actions = {
  /*   Ререндер всего приложения.  Задается через subscribr/observer 
  (желательно не использовать)  */
  rerenderApp: () => { },

  createPost() {

    const messageID = state.usersPosts.list[currentUserID.id].length + 1;
    state.usersPosts.list[currentUserID.id].push({
      messageID: messageID,
      userID: currentUserID.id,
      message: usersPostPosterText.take(currentUserID.id),
      time: 1,
      rating: {
        likes: 5,
        dislikes: 1,
      }
    }
    );
    // обнуляем поле ввода после добавления нового поста на стороне BLL
    usersPostPosterText.edit(currentUserID.id, () => '');
  }
}

