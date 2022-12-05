
import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { usersMessageSenderText, userMessages } from './usersMessages/userMessages';

const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';
const CREATE_POST = 'CREATE-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_MESSAGE_SENDER_TEXT = 'GET-MESSAGE-SENDER-TEXT';
const SET_MESSAGE_SENDER_TEXT = 'SET-MESSAGE-SENDER-TEXT';

export const store = {

  _state: {
    currentUserID: currentUserID,
    usersProfileInfo: usersProfileInfo,
    usersPosts: usersPosts,
    userMessages: userMessages,
    usersPostPosterText: usersPostPosterText,
    usersMessageSenderText: usersMessageSenderText,
  },

  _rerenderApp() {
    //  Ререндер всего приложения.  
    //  Задается через subscribe(observer) в index.js 
    //  (желательно не использовать) 
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
    const {
      currentUserID: { id: curUsID },
      usersPosts,
      usersPostPosterText,
      usersMessageSenderText,
      userMessages,
    } = this._state;

    switch (action.type) {
      case GET_MESSAGE_SENDER_TEXT:
        return usersMessageSenderText.take(curUsID);
        break;
      case SET_MESSAGE_SENDER_TEXT:
        usersMessageSenderText.edit(curUsID, action.text);
        break;
      case SEND_MESSAGE:
        if (usersMessageSenderText.take(curUsID) === '') return;
        userMessages.list[curUsID].list[action.userID].push({
          me: true,
          message: usersMessageSenderText.take(curUsID),
        });
        usersMessageSenderText.edit(curUsID, '');
        break;
      case CREATE_POST:
        // если пустой пост - не выводим его
        if (usersPostPosterText.take(curUsID) === '') return;
        //  Создание поста на свое стене 
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
        usersPostPosterText.edit(curUsID, '');
        break;
      case SET_CURRENT_USER_ID:
        this._setCurrentUserID(action.userID);
        break;
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

export const getMessageSenderTextActionCreator = () => ({
  type: GET_MESSAGE_SENDER_TEXT,
});

export const setMessageSenderTextActionCreator = (text) => ({
  type: SET_MESSAGE_SENDER_TEXT,
  text: text,
});
export const sendMessageSenderTextActionCreator = (userID) => ({
  type: SEND_MESSAGE,
  userID: userID,
});
