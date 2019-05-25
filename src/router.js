import React, { Component } from "react";

import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./component/loginForm";
import EmployeeList from "./component/employeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
