
import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { usersMessageSenderText, usersMessages } from './usersMessages/usersMessages';

import usersMessageSenderTextReducer from './usersMessageSenderTextReducer';
import usersMessagesReducer from './usersMessagesReducer';
import usersPostsReducer from './usersPostsReducer';
import usersPostPosterTextReducer from './usersPostPosterTextReducer';
import currentUserIDReducer from './currentUserIDReducer';


const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';

const GET_MESSAGE_SENDER_TEXT = 'GET-MESSAGE-SENDER-TEXT';
const SET_MESSAGE_SENDER_TEXT = 'SET-MESSAGE-SENDER-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const GET_POST_POSTER_TEXT = 'GET-POST-POSTER-TEXT';
const SET_POST_POSTER_TEXT = 'SET-POST-POSTER-TEXT';
const CREATE_POST = 'CREATE-POST';


export const store = {

  _state: {
    currentUserID: currentUserID,
    usersProfileInfo: usersProfileInfo,
    usersPosts: usersPosts,
    usersPostPosterText: usersPostPosterText,
    usersMessages: usersMessages,
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

  get curUsersPostPosterText() {
    return this._state.usersPostPosterText[this._state.currentUserID.id];
  },

  curUserMessageSenderText(userID) {
    return this._state.usersMessageSenderText[this._state.currentUserID.id][userID];
  },

  subscribe(obsever) {
    this._rerenderApp = obsever;
  },

  dispatch(action) {

    let {
      currentUserID: { id: curUsID },
      usersPosts,
      usersPostPosterText,
      usersMessageSenderText,
      usersMessages,
    } = this._state;

    // usersMessageSenderText = usersMessageSenderTextReducer({
    //   currentUserID,
    //   usersMessageSenderText,
    // }, action);
    // usersMessages = usersMessagesReducer({
    //   currentUserID,
    //   usersMessageSenderText,
    //   usersMessages,
    // }, action);
    // usersPostPosterText = usersPostPosterTextReducer({
    //   currentUserID,
    //   usersPostPosterText,
    // }, action);

    // currentUserID = currentUserIDReducer({ currentUserID }, action);

    let newState;

    newState = usersPostPosterTextReducer({
      currentUserID: this._state.currentUserID,
      usersPostPosterText: this._state.usersPostPosterText,
    }, action);
    this._state.usersPostPosterText = newState.usersPostPosterText;

    newState = usersPostsReducer({
      currentUserID: this._state.currentUserID,
      usersPostPosterText: this._state.usersPostPosterText,
      usersPosts: this._state.usersPosts,
    }, action);
    this._state.usersPosts = newState.usersPosts;
    this._state.usersPostPosterText = newState.usersPostPosterText;

    newState = usersMessageSenderTextReducer({
      currentUserID: this._state.currentUserID,
      usersMessageSenderText: this._state.usersMessageSenderText,
    }, action);
    this._state.usersMessageSenderText = newState.usersMessageSenderText;

    newState = usersMessagesReducer({
      currentUserID: this._state.currentUserID,
      usersMessageSenderText: this._state.usersMessageSenderText,
      usersMessages: this._state.usersMessages,
    }, action);
    this._state.usersMessageSenderText = newState.usersMessageSenderText;
    this._state.usersMessages = newState.usersMessages;


    switch (action.type) {
      //Работа с инпутом в сообщениях
      case GET_MESSAGE_SENDER_TEXT:
        break;
      case SET_MESSAGE_SENDER_TEXT:
        break;
      case SEND_MESSAGE:
        break;
      //Работа с инпутом в постах
      case GET_POST_POSTER_TEXT:
        break;
      case SET_POST_POSTER_TEXT:
        break;
      case CREATE_POST:
        break;
      // Смена текущего пользователя
      case SET_CURRENT_USER_ID:
        this._setCurrentUserID(action.userID);
        break;
      default:
        throw new Error('Selected non-existed action type');
    }
  },
}


export const setCurretUserIDActionCreator = (userID) => ({
  type: SET_CURRENT_USER_ID,
  userID: userID,
});
export const getMessageSenderTextActionCreator = (userID, destination) => ({
  type: GET_MESSAGE_SENDER_TEXT,
  userID: userID,
  // destination: destination,
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
// export const getPostPosterTextActionCreator = (destination) => ({
//   type: GET_POST_POSTER_TEXT,
//   destination: destination,
// });
export const setPostPosterTextActionCreator = (text) => ({
  type: SET_POST_POSTER_TEXT,
  text: text,
});
export const addPostActionCreator = () => ({
  type: CREATE_POST,
});