import React, { Component } from "react";

import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./component/loginForm";
import EmployeeList from "./component/employeeList";
import EmployeeCreate from "./component/employeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>
        <Scene key="main" initial>
          <Scene
            onRight={() => Actions.employeecreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
          <Scene
            title="createEmployee"
            key="employeecreate"
            component={EmployeeCreate}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
