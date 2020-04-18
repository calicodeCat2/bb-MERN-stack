import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
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
      <div>
        <form>{this.renderFields()}</form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registerForm",
})(RegisterForm);
