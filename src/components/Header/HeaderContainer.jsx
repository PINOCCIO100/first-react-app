import React from "react";
import { connect } from "react-redux";
import Header from './Header';

class HeaderContainerAPI extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

export default connect()(HeaderContainerAPI);