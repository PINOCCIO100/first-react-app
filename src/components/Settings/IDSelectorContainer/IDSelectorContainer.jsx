import { connect } from "react-redux";
import { setCurrentUserID } from "../../../dataBase/reducers/usersProfileInfoReducer";
import { usersProfileInfoDefault } from "../../../dataBase/usersProfileInfo/usersProfileInfo";

import IDSelector from "../IDSelector/IDSelector";

export const IDSelectorContainer = connect(
  (state) => ({
    currentUserID: state.ProfileState.currentUserID,
    usersProfileInfoDefault,
  }),
  {
    setCurrentUserID,
  }
)(IDSelector);