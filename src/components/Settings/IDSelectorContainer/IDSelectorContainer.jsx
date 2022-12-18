import { connect } from "react-redux";
import { setCurrentUserID } from "../../../dataBase/reducers/usersProfileInfoReducer";

import IDSelector from "../IDSelector/IDSelector";


const mapStateToProps = (state) => {
  return {
    currentUserID: state.ProfileState.currentUserID,
    usersProfileInfo: state.ProfileState.usersProfileInfo,
  }
}

const mapDispatchToState = {
  setCurrentUserID,
}

const mergeToProps = (mapStateToProps, mapDispatchToState, ownProps) => {
  return {
    ...mapStateToProps,
    ...mapDispatchToState,
    ...ownProps,
    setInfoFToBLL(userID) {
      mapDispatchToState.setCurrentUserID(userID);
    },
  }
}

export const IDSelectorContainer = connect(mapStateToProps, mapDispatchToState, mergeToProps)(IDSelector);