import React, { Component } from "react";

import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./component/loginForm";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please login" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
