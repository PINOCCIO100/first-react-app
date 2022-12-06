const SEND_MESSAGE = 'SEND-MESSAGE';

const usersMessagesReducer = (state, action) => {
  const {
    currentUserID: { id: curUsID },
    usersMessageSenderText,
    usersMessages,
  } = state;
  const curUserMessageSenderText = usersMessageSenderText.list[curUsID];

  switch (action.type) {
    case SEND_MESSAGE:
      if (curUserMessageSenderText.take(action.userID) === '') return;
      usersMessages.list[curUsID].list[action.userID].push({
        me: true,
        message: curUserMessageSenderText.take(action.userID),
      });
      curUserMessageSenderText.edit(action.userID, '');
      break;
    default:
        break;
  }
  return usersMessages;
}

export default usersMessagesReducer