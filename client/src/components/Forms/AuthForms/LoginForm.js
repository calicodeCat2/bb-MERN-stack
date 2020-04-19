import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import LoginField from "./LoginField";
import loginFields from "./loginFields";
import * as actions from '../../../store/actions/authActions';


class LoginForm extends Component {
  renderFields() {
    return _.map(loginFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={LoginField}
          type="text"
          label={label}
          name={name}
          onChange={this.props.onChange}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          {this.renderFields()}
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(actions.loginUser(user))
  }
};

LoginForm = connect(null, mapDispatchToProps)(LoginForm)

export default reduxForm({
  form: "loginForm",
})(LoginForm);
