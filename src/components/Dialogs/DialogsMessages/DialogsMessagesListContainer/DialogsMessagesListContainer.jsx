import { connect } from "react-redux";
import DialogsMessagesList from "../DialogsMessagesList/DialogsMessagesList";

const mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  return {
    currentUserID,
    usersProfileInfo: { ...state.ProfileState.usersProfileInfo },
    curUserMessages: { ...state.DialogsState.usersMessages[currentUserID] },
  }
}

export const DialogsMessagesListContainer = connect(mapStateToProps)(DialogsMessagesList);
