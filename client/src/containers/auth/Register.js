import React, { Component } from "react";
import { connect } from "react-redux";
import "./Register.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import * as actions from '../../store/actions/authActions/registerActions';

import RegisterForm from "../../components/Forms/AuthForms/RegisterForm";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      firstName: e.firstName,
      lastName: e.lastName,
      username: e.username,
      email: e.email,
      password: e.password,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("submit", user);

    this.props.onRegister(user);
    console.log("click");
  };

  render() {
    return (
      <Container className="form">
        <Row className="form-row">
          <h3>Register</h3>
          <RegisterForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            user={this.user}
          />
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (user) => dispatch(actions.registerUser(user)),

  };
};

export default connect(null, mapDispatchToProps)(Register);

