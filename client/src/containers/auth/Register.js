import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Input from "../../components/UIComponents/Input";
import RegisterForm from "../../components/Forms/AuthForms/RegisterForm";

class Register extends Component {
  render() {
    return (
      <div>
        <RegisterForm />
        <Button onClick="" type="submit">
          Submit
        </Button>
      </div>
    );
  }
}

export default connect(null, null)(Register);
