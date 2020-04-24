import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/authActions/loginActions";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token", "authUser");
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
