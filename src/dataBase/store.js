import { usersProfileInfo, currentUserID } from './usersProfileInfo/usersProfileInfo';
import { usersPostPosterText, usersPosts } from './usersPosts/usersPosts';
import { usersMessageSenderText, usersMessages } from './usersMessages/usersMessages';

import usersMessageSenderTextReducer from './reducers/usersMessageSenderTextReducer';
import usersMessagesReducer from './reducers/usersMessagesReducer';
import usersPostsReducer from './reducers/usersPostsReducer';
import usersPostPosterTextReducer from './reducers/usersPostPosterTextReducer';
import currentUserIDReducer from './reducers/currentUserIDReducer';


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
  subscribe(observer) {
    this._rerenderApp = observer;
  },
  // методы для получения состояний 
  get state() {
    return this._state;
  },

  curUsersPostPosterText() {
    return this._state.usersPostPosterText[this._state.currentUserID];
  },

  curUserMessageSenderText(userID) {
    return this._state.usersMessageSenderText[this._state.currentUserID][userID];
  },

  dispatch(action) {

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

    newState = currentUserIDReducer({
      currentUserID: this._state.currentUserID,
    }, action);
    this._state.currentUserID = newState.currentUserID;
  },
}
