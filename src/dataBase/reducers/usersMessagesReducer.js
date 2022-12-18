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

  switch (action.type) {
    case SEND_MESSAGE: {
      if (state.usersMessageSenderText[action.curUsID][action.userID] === '') return state;

      const newState = { ...state };

      newState.usersMessages = { ...state.usersMessages };
      const curUserMessages = newState.usersMessages[action.curUsID] = { ...state.usersMessages[[action.curUsID]] };

      newState.usersMessageSenderText = { ...state.usersMessageSenderText };
      const curUserMessageSenderText = newState.usersMessageSenderText[action.curUsID] = { ...state.usersMessageSenderText[action.curUsID] };

      curUserMessages[action.userID] = [
        ...curUserMessages[action.userID],
        {
          me: true,
          message: curUserMessageSenderText[action.userID],
        }
      ];
      curUserMessageSenderText[action.userID] = '';
      return newState;
    }
    case SET_MESSAGE_SENDER_TEXT: {
      const newState = { ...state };

      newState.usersMessageSenderText = { ...state.usersMessageSenderText };
      const curUserMessageSenderText = newState.usersMessageSenderText[action.curUsID] = { ...state.usersMessageSenderText[action.curUsID] };

      curUserMessageSenderText[action.userID] = action.text;
      return newState;
    }
    default:
      return state;
  }
}

export const sendMessageSenderText = (curUsID, userID) => ({
  type: SEND_MESSAGE,
  curUsID: curUsID,
  userID: userID,
});

export const setMessageSenderText = (curUsID, userID, text) => ({
  type: SET_MESSAGE_SENDER_TEXT,
  curUsID: curUsID,
  userID: userID,
  text: text,
});

export default usersMessagesReducer
