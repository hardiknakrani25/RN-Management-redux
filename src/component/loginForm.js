import React, { Component } from "react";
import { Card, Input, Button, CardSection } from "./common";
import { connect } from "react-redux";
import { emailChanged, passwordChange, loginUser } from "../actions";
class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChange(text);
  };

  onPressButton = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onPressButton}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChange, loginUser }
)(LoginForm);
