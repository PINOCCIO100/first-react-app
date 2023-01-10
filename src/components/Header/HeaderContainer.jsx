import { connect } from "react-redux";

import { setIsAuth } from '../../dataBase/reducers/authReducer';

import Header from './Header';

export default connect((state) => ({ isAuth: state.Auth.isAuth }), { setIsAuth })(Header);