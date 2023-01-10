import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { reqAuthUser } from "../../api/reqAuthUser";
import { setIsAuth, setUserData } from "../../dataBase/reducers/authReducer";
import { setCurrentUserID } from '../../dataBase/reducers/usersProfileInfoReducer';
import Auth from "./Auth";


function AuthAPI(props) {
  const navigate = useNavigate();
  useEffect(() => {
    // Если мы залогинены, то происходит автоматический редирект на страницу "/"
    if (props.isAuth) navigate('/');
  })
  const submitUserData = async (userData) => {
    const res = await reqAuthUser(userData);
    props.setIsAuth(res.data);
  }
  return (
    <Auth
      submitUserData={submitUserData}
      curUsID={props.curUsID}
    />
  );
}


export default connect(
  (state) => ({
    isAuth: state.Auth.isAuth,
    userData: state.Auth.userData,
    curUsID: state.ProfileState.currentUserID,
  }),
  {
    setIsAuth,
    setUserData,
    setCurrentUserID
  }
)(AuthAPI);