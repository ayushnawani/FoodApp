/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

import { TabNavigator } from "react-navigation";
import MenuNavigator from "./app/MenuPage";
import NotificationPage from "./app/NotificationPage";
import OrderPage from "./app/OrderPage";

import Home from "./app/HomePage";

export default class Start extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require("./assets/Logo.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };
  render() {
    return <Home />;
  }
}

const DemoApp = TabNavigator(
  {
    Start: { screen: Start },
    Home: { screen: Home },
    Menu: { screen: MenuNavigator },
    Order: { screen: OrderPage },
    Notification: { screen: NotificationPage }
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#F27C21",
      showLabel: false
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent",
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover" // or 'stretch'
  },
  icon: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  }
});

AppRegistry.registerComponent("DemoApp", () => DemoApp);
