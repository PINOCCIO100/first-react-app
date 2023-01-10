import React from "react";
import { connect } from "react-redux";

import { setIsAuth } from '../../dataBase/reducers/authReducer';

import Header from './Header';

class HeaderContainerAPI extends React.Component {
  render() {
    return (
      <Header
        {...this.props}
      />
    )
  }
}

export default connect((state) => ({ isAuth: state.Auth.isAuth }), { setIsAuth })(HeaderContainerAPI);