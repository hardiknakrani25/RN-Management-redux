import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { firebaseConfig } from "../config";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

import LoginForm from "./component/loginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
