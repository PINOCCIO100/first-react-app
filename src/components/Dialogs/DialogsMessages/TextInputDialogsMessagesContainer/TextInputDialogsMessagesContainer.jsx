import { connect } from "react-redux";
import { sendMessageSenderText, setMessageSenderText } from "../../../../dataBase/reducers/usersMessagesReducer";
import TextInput from "../../../_sharedComponents/TextInput/TextInput";


const mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  return {
    currentUserID,
    curUsersMessageSenderText: { ...state.DialogsState.usersMessageSenderText[currentUserID] },
    curUsersMessages: { ...state.DialogsState.usersMessages[currentUserID] },
  }
}

const mapDispatchToProps = {
  setMessageSenderText,
  sendMessageSenderText,
}

const mergeToProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  const currentUserID = mapStateToProps.currentUserID;
  return {
    ...ownProps,
    getTextFromBLL() {
      return mapStateToProps.curUsersMessageSenderText[ownProps.userID];
    },
    setTextToBLL(currentTextUI) {
      mapDispatchToProps.setMessageSenderText(currentUserID, ownProps.userID, currentTextUI);
    },
    sendText() {
      mapDispatchToProps.sendMessageSenderText(currentUserID, ownProps.userID);
    },
    labels: {
      placeholder: 'Text your message...',
      button: 'Send',
    },
  }
}

export const TextInputDialogsMessagesContainer = connect(mapStateToProps, mapDispatchToProps, mergeToProps)(TextInput);
