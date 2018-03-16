import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";

import { Header } from "./src/components/common";
import RecentTracksList from "./src/components/RecentTracksList";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Last FM" backgroundColor="#000" />
          <RecentTracksList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
