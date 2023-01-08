import { connect } from "react-redux";
import { reqAuthUser } from "../../api/reqAuthUser";
import { setIsAuth, setUserData } from "../../dataBase/reducers/authReducer";
import { setCurrentUserID } from '../../dataBase/reducers/usersProfileInfoReducer';
import Auth from "./Auth";


export default connect(
  (state) => ({
    isAuth: state.Auth.isAuth,
    userData: state.Auth.userData,
    curUsID: state.ProfileState.currentUserID,
    submitUserData: reqAuthUser
  }),
  {
    setIsAuth,
    setUserData,
    setCurrentUserID
  }
)(Auth);