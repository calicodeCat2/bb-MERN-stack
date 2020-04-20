import React, { Component } from "react";
import "./RegisterForm.scss";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import RegisterField from "./RegisterField";
import registerFields from "./registerFields";

class RegisterForm extends Component {
  renderFields() {
    return _.map(registerFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={RegisterField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <Container className="form">
      <Row className="form-row">
        <form onSubmit={this.props.onSubmit}>
          {this.renderFields()}
          <Button type="submit" className="form-button">
            Submit
          </Button>
        </form>
      </Row>
    </Container>
    );
  }
}

export default reduxForm({
  form: "registerForm",
})(RegisterForm);
