import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { firebaseConfig } from "../config";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./router";
import LoginForm from "./component/loginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
