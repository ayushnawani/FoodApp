import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  icon: {
    width: 50,
    height: 50
  }
});

const OrderPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>THIS IS THE ORDER SCREEN!</Text>
    </View>
  );
};

OrderPage.navigationOptions = {
  tabBarIcon: ({ tintColor }) =>
    <Image
      source={require("../assets/Order_Btn_nrm.png")}
      style={[styles.icon, { tintColor: tintColor }]}
    />
};

export default OrderPage;
