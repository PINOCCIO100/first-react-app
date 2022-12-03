
import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';

export const store = {
  subscriber(obsever) {
    this.rerenderApp = obsever;
  },

  state: {
    currentUserID: currentUserID,
    usersProfileInfo: usersProfileInfo,
    usersPosts: usersPosts,
    userMessages: userMessages,
    usersPostPosterText: usersPostPosterText,
  },

  createPost() {
    const curUsID = this.state.currentUserID.id;
    const messageID = this.state.usersPosts.list[curUsID].length + 1;

    this.state.usersPosts.list[curUsID].push({
      messageID: messageID,
      userID: curUsID,
      message: this.state.usersPostPosterText.take(curUsID),
      time: 1,
      rating: {
        likes: 5,
        dislikes: 1,
      }
    }
    );
    // обнуляем поле ввода после добавления нового поста на стороне BLL
    this.state.usersPostPosterText.edit(currentUserID.id, () => '');
  },

  //  Ререндер всего приложения.  
  //  Задается через subscriber(observer) в index.js 
  //  (желательно не использовать) 
  //  Создание поста на свое стене 
  rerenderApp() { },
}

