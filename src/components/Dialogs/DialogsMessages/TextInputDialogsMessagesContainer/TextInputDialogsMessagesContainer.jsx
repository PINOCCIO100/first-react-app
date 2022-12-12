import { connect } from "react-redux";
import { sendMessageSenderTextActionCreator, setMessageSenderTextActionCreator } from "../../../../dataBase/reducers/usersMessagesReducer";
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
  setMessageSenderTextActionCreator,
  sendMessageSenderTextActionCreator,
}

const mergeToProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  const currentUserID = mapStateToProps.currentUserID;
  return {
    ...ownProps,
    getTextFromBLL() {
      return mapStateToProps.curUsersMessageSenderText[ownProps.userID];
    },
    setTextToBLL(currentTextUI) {
      mapDispatchToProps.setMessageSenderTextActionCreator(currentUserID, ownProps.userID, currentTextUI);
    },
    sendText() {
      mapDispatchToProps.sendMessageSenderTextActionCreator(currentUserID, ownProps.userID);
    },
    labels: {
      placeholder: 'Text your message...',
      button: 'Send',
    },
  }
}

export const TextInputDialogsMessagesContainer = connect(mapStateToProps, mapDispatchToProps, mergeToProps)(TextInput);
