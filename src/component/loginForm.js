import React, { Component } from "react";
import { Card, Input, Button, CardSection } from "./common";
import { connect } from "react-redux";
import { emailChanged } from "../actions";
class LoginForm extends Component {
  onEmailChange = text => {
    console.warn(this.props.email);

    this.props.emailChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(
  mapStateToProps,
  { emailChanged }
)(LoginForm);
