import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field, submit } from "redux-form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import LoginField from "./LoginField";
import loginFields from "./loginFields";
import * as actions from "../../../store/actions/authActions";

class LoginForm extends Component {
  renderFields() {
    // console.log(this.props);
    
    return _.map(loginFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={LoginField}
          type="text"
          label={label}
          name={name}
          value={this.props.value.event}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          // Need to receive submit props
        >

          {console.log(this.renderFields())}
          {this.renderFields()}
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

LoginForm = connect(null, actions)(LoginForm);

export default reduxForm({
  form: "loginForm",
})(LoginForm);
