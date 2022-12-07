const SET_MESSAGE_SENDER_TEXT = 'SET-MESSAGE-SENDER-TEXT';

const usersMessageSenderTextReducer = (state, action) => {
  const newState = {
    usersMessageSenderText: { ...state.usersMessageSenderText },
  }
  const curUserMessageSenderText = newState.usersMessageSenderText[state.currentUserID.id];

  switch (action.type) {
    //Работа с инпутом в сообщениях
    case SET_MESSAGE_SENDER_TEXT:
      curUserMessageSenderText[action.userID] = action.text;
      return newState;
    default:
      return state;
  }
}

export default usersMessageSenderTextReducer