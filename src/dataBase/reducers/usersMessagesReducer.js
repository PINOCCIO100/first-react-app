import { usersMessages } from "../usersMessages/usersMessages";
import { currentUserID } from '../usersProfileInfo/usersProfileInfo';
import { usersMessageSenderText } from '../usersMessages/usersMessages';


const SET_MESSAGE_SENDER_TEXT = 'SET-MESSAGE-SENDER-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  currentUserID,
  usersMessageSenderText,
  usersMessages,
};

const usersMessagesReducer = (state = initialState, action) => {
  const newState = {
    currentUserID: state.currentUserID,
    usersMessageSenderText: { ...state.usersMessageSenderText },
    usersMessages: { ...state.usersMessages },
  }

  let curUserMessageSenderText = newState.usersMessageSenderText[action.curUsID] = { ...state.usersMessageSenderText[action.curUsID] };

  switch (action.type) {
    case SEND_MESSAGE:
      if (curUserMessageSenderText[action.userID] === '') return state;
      newState.usersMessages[action.curUsID][action.userID] = [
        ...newState.usersMessages[action.curUsID][action.userID],
        {
          me: true,
          message: curUserMessageSenderText[action.userID],
        }
      ];
      curUserMessageSenderText[action.userID] = '';
      return newState
    case SET_MESSAGE_SENDER_TEXT:
      curUserMessageSenderText[action.userID] = action.text;
      return newState;
    default:
      return state;
  }
}

export const sendMessageSenderTextActionCreator = (curUsID, userID) => ({
  type: SEND_MESSAGE,
  curUsID: curUsID,
  userID: userID,
});

export const setMessageSenderTextActionCreator = (curUsID, userID, text) => ({
  type: SET_MESSAGE_SENDER_TEXT,
  curUsID: curUsID,
  userID: userID,
  text: text,
});

export default usersMessagesReducer
