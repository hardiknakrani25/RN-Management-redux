import React, { Component } from "react";

import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./component/loginForm";
import EmployeeList from "./component/employeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please login" />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
