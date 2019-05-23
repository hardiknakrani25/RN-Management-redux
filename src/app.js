import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCTkK0yqS9RGx_KFnGKiuwMfnr85wU-StA",
      authDomain: "manager-2e89c.firebaseapp.com",
      databaseURL: "https://manager-2e89c.firebaseio.com",
      projectId: "manager-2e89c",
      storageBucket: "manager-2e89c.appspot.com",
      messagingSenderId: "895752016128",
      appId: "1:895752016128:web:52ce8b3b111d0a78"
    };
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
