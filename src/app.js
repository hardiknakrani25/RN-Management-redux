import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { firebaseConfig } from "../config";
import firebase from "firebase";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>Hello!</Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
