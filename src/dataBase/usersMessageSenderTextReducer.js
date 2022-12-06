const GET_MESSAGE_SENDER_TEXT = 'GET-MESSAGE-SENDER-TEXT';
const SET_MESSAGE_SENDER_TEXT = 'SET-MESSAGE-SENDER-TEXT';

const usersMessageSenderTextReducer = (state, action) => {
  const {
    currentUserID: { id: curUsID },
    usersMessageSenderText,
  } = state;

  const curUserMessageSenderText = usersMessageSenderText.list[curUsID];

  switch (action.type) {
    //Работа с инпутом в сообщениях
    case GET_MESSAGE_SENDER_TEXT:
      return curUserMessageSenderText.take(action.userID);
    case SET_MESSAGE_SENDER_TEXT:
      curUserMessageSenderText.edit(action.userID, action.text);
      break;
    default:
      break;
  }
  console.log('Reducer', usersMessageSenderText);
  return usersMessageSenderText;
}

export default usersMessageSenderTextReducer