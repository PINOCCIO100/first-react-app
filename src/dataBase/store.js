
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

    let resState;
    const curUserMessageSenderText = usersMessageSenderText.list[curUsID];

    resState = usersPostsReducer({
      currentUserID,
      usersPosts,
      usersPostPosterText,
    }, action);
    this._state.currentUserID = resState.currentUserID;
    this._state.usersPosts = resState.usersPosts;
    this._state.usersPostPosterText = resState.usersPostPosterText;

    switch (action.type) {
      //Работа с инпутом в сообщениях
      case GET_MESSAGE_SENDER_TEXT:
        return curUserMessageSenderText.take(action.userID);
      case SET_MESSAGE_SENDER_TEXT:
        curUserMessageSenderText.edit(action.userID, action.text);
        break;
      case SEND_MESSAGE:
        if (curUserMessageSenderText.take(action.userID) === '') return;
        usersMessages.list[curUsID].list[action.userID].push({
          me: true,
          message: curUserMessageSenderText.take(action.userID),
        });
        curUserMessageSenderText.edit(action.userID, '');
        break;
      //Работа с инпутом в постах
      case GET_POST_POSTER_TEXT:
        return usersPostPosterText.take(curUsID);
      case SET_POST_POSTER_TEXT:
        usersPostPosterText.edit(curUsID, action.text);
        break;
      case CREATE_POST:
        // // если пустой пост - не выводим его
        // if (usersPostPosterText.take(curUsID) === '') return;
        // //  Создание поста на свое стене 
        // // TODO: лайки и дизлайки нужно пропустить через BLL. Сейчас они при ререндере обнуляются 
        // const messageID = usersPosts.list[curUsID].length + 1;
        // usersPosts.list[curUsID].push({
        //   messageID: messageID,
        //   userID: curUsID,
        //   message: usersPostPosterText.take(curUsID),
        //   time: 1,
        //   rating: {
        //     likes: 0,
        //     dislikes: 0,
        //   }
        // });
        // // обнуляем поле ввода после добавления нового поста на стороне BLL
        // usersPostPosterText.edit(curUsID, '');
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
export const getPostPosterTextActionCreator = () => ({
  type: GET_POST_POSTER_TEXT,
});
export const setPostPosterTextActionCreator = (text) => ({
  type: SET_POST_POSTER_TEXT,
  text: text,
});
export const addPostActionCreator = () => ({
  type: CREATE_POST,
});