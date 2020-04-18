import React, { Component } from "react";
import LoginForm from "../../components/Forms/AuthForms/LoginForm";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      email: event.email,
      password: event.password
    });
    console.log(this.state);
    
  };

  handleSubmit = event => {
  //   event.preventDefault();
  //   let userData = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   this.props.onLogin(userData);
  event.preventDefault();
  
  console.log(this.state);
  
  };
  render() {

    console.log();

    return (
      <div>
        <LoginForm 
        onChange={this.handleChange}
        value={this.state}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state, actions) => {};

export default Login;
