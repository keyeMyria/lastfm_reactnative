import React, { Component } from "react";
import { View, Text } from "react-native";

import { Header } from "./common/Header";
import MainTabNavigator from "./mainTabs/MainTabNavigator";

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Last FM" backgroundColor="#000" />
        <MainTabNavigator />
      </View>
    );
  }
}

export default Main;
