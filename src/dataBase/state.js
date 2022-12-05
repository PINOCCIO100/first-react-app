
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
    const curUserMessageSenderText = usersMessageSenderText.list[curUsID];

    switch (action.type) {
      case GET_MESSAGE_SENDER_TEXT:
        return curUserMessageSenderText.take(action.userID);
        break;
      case SET_MESSAGE_SENDER_TEXT:
        curUserMessageSenderText.edit(action.userID, action.text);
        break;
      case SEND_MESSAGE:
        if (curUserMessageSenderText.take(action.userID) === '') return;
        userMessages.list[curUsID].list[action.userID].push({
          me: true,
          message: curUserMessageSenderText.take(action.userID),
        });
        curUserMessageSenderText.edit(action.userID, '');
        break;
      case CREATE_POST:
        // если пустой пост - не выводим его
        if (usersPostPosterText.take(curUsID) === '') return;
        //  Создание поста на свое стене 
        // TODO: лайки и дизлайки нужно пропустить через BLL. Сейчас они при ререндере обнуляются 
        const messageID = usersPosts.list[curUsID].length + 1;
        usersPosts.list[curUsID].push({
          messageID: messageID,
          userID: curUsID,
          message: usersPostPosterText.take(curUsID),
          time: 1,
          rating: {
            likes: 0,
            dislikes: 0,
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
export const getMessageSenderTextActionCreator = (userID) => ({
  type: GET_MESSAGE_SENDER_TEXT,
  userID: userID,
});
export const setMessageSenderTextActionCreator = (userID, text) => ({
  type: SET_MESSAGE_SENDER_TEXT,
  userID: userID,
  text: text,
});
export const sendMessageSenderTextActionCreator = (userID) => ({
  type: SEND_MESSAGE,
  userID: userID,
});
