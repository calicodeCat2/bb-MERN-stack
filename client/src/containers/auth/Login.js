import React, { Component } from "react";
import { connect } from "react-redux";
import "./Register.scss";
import LoginForm from "../../components/Forms/AuthForms/LoginForm";
import * as actions from "../../store/actions/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      email: event.email,
      password: event.password,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("submit", user);

    this.props.onLogin(user);
    console.log("click");
  };
  render() {
    console.log();

    return (
      <Container className="form">
        <Row className="form-row">
          <h3>Login</h3>
          <LoginForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            user={this.user}
          />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(actions.loginUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
