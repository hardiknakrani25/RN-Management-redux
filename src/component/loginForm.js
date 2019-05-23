import React, { Component } from "react";
import { Card, Input, Button, CardSection } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com" />
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

export default LoginForm;
