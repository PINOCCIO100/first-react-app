const SEND_MESSAGE = 'SEND-MESSAGE';

const usersMessagesReducer = (state, action) => {
  const curUsID = state.currentUserID.id;
  const newState = {
    usersMessageSenderText: { ...state.usersMessageSenderText },
    usersMessages: { ...state.usersMessages },
  }
  let curUserMessageSenderText = newState.usersMessageSenderText[curUsID] = { ...state.usersMessageSenderText[curUsID] };

  switch (action.type) {
    case SEND_MESSAGE:
      if (curUserMessageSenderText[action.userID] === '') return state;
      newState.usersMessages[curUsID][action.userID] = [
        ...newState.usersMessages[curUsID][action.userID],
        {
          me: true,
          message: curUserMessageSenderText[action.userID],
        }
      ]
      curUserMessageSenderText[action.userID] = '';
      return newState
    default:
      return state;
  }
}

export default usersMessagesReducer