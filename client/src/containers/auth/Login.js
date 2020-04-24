import React, { Component } from "react";
import { connect } from "react-redux";
import "./Register.scss";
import LoginForm from "../../components/Forms/AuthForms/LoginForm";
import * as actions from "../../store/actions/authActions/loginActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

    class Login extends Component {
      state = {
        email: "",
        password: "",
      };

      componentDidMount() {
        if(!this.props.onLoginRedirectPath) {
          this.props.onLoginRedirectPath();
        }
      }

      handleChange = (e) => {
        this.setState({
          email: e.email,
          password: e.password,
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        let user = {
          email: this.state.email,
          password: this.state.password,
        };
        this.props.onLogin(user);
      };
      render() {
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
  return {
    loading: state.login.loading,
    authUser: state.login.authUser,
    token: state.login.token,
    isAuth: state.login.isAuth,
    setLoginRedirect: state.login.setLoginRedirect
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(actions.loginUser(user)),
    onLoginRedirectPath: () => dispatch(actions.setLoginRedirect)

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);