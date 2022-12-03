
import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { userMessages } from './usersMessages/userMessages';

const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';
const CREATE_POST = 'CREATE-POST';

export const store = {

  _state: {
    currentUserID: currentUserID,
    usersProfileInfo: usersProfileInfo,
    usersPosts: usersPosts,
    userMessages: userMessages,
    usersPostPosterText: usersPostPosterText,
  },

  _rerenderApp() {
    //  Ререндер всего приложения.  
    //  Задается через subscribe(observer) в index.js 
    //  (желательно не использовать) 
  },

  _createPost() {
    //  Создание поста на свое стене 
    const {
      currentUserID: { id: curUsID },
      usersPosts,
      usersPostPosterText
    } = this.state;
    const messageID = usersPosts.list[curUsID].length + 1;

    usersPosts.list[curUsID].push({
      messageID: messageID,
      userID: curUsID,
      message: usersPostPosterText.take(curUsID),
      time: 1,
      rating: {
        likes: 5,
        dislikes: 1,
      }
    });
    // обнуляем поле ввода после добавления нового поста на стороне BLL
    usersPostPosterText.edit(currentUserID.id, () => '');
  },

  _setCurrentUserID(userID) {
    this._state.currentUserID.setID(userID);
    // TODO: избавиться от ререндера всего приложения
    this._rerenderApp();
  },

  get state() {
    return this._state;
  },

  subscribe(obsever) {
    this._rerenderApp = obsever;
  },

  dispatch(action) {
    switch (action.type) {
      case CREATE_POST:
        this._createPost(); break;
      case SET_CURRENT_USER_ID:
        this._setCurrentUserID(action.userID); break;
      default:
        throw new Error('Selected non-existed action type');
    }
  },
}

export const addPostActionCreator = () => ({
  type: CREATE_POST,
});

export const setCurretUserIDActionCreator = (userID) => ({
  type: SET_CURRENT_USER_ID,
  userID: userID,
});