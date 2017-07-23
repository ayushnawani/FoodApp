import React, { Component } from "react";
import {
  Easing,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from "react-native";

class Home extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    spinValue: new Animated.Value(0),
    zoomValue: new Animated.Value(1)
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require("../assets/Home_Btn.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  componentDidMount() {
    // Animated.sequence([
    //   Animated.timing(this.state.fadeAnim, {
    //     toValue: 1,
    //     duration: 1000
    //   }),
    //   Animated.spring(new Animated.ValueXY(), {
    //     toValue: { x: 0, y: 0 } // return to start
    //   })
    // ]).start();
    Animated.sequence([
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 2000
      }),
      Animated.timing(this.state.zoomValue, {
        toValue: 3,
        duration: 2000,
        delay: 1000
      }),
      Animated.timing(this.state.zoomValue, {
        toValue: 1,
        duration: 2000,
        delay: 1000
      }),
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 3000,
        delay: 1000,
        easing: Easing.linear
      })
    ]).start();
  }

  componentWillMount() {}

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const { fadeAnim, zoomValue } = this.state;
    const animatedStyle = {
      transform: [{ scale: zoomValue }],
      opacity: fadeAnim
    };
    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={{ height: 20, backgroundColor: "white" }} />
        <View style={{ flex: 1, alignItems: "stretch" }}>
          <Animated.Image
            style={{
              transform: [{ rotate: spin }],
              justifyContent: "center",
              alignItems: "flex-start",
              flex: 1,
              width: null,
              height: null
            }}
            source={require("../assets/landing-page.png")}
          >
            <Text
              style={{
                fontSize: 60,
                marginLeft: 60,
				fontWeight: "bold",
                fontFamily: "TimesNewRomanPSMT",
                textAlign: "left",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              Food
            </Text>
            <Text
              style={{
                fontSize: 80,
                marginLeft: 60,
                fontFamily: "TimesNewRomanPSMT",
                textAlign: "left",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              Panda
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 60,
                textAlign: "left",
				fontWeight: "bold",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              WHAT A TWIST.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 60,
				marginTop:10,
				width: 360,
                textAlign: "left",
                backgroundColor: "transparent",
                color: "white"
              }}
            >
              The Panda the iconic long, slim slick of bread,has traditionally
              one of the most potebnt symbols of french culture.
            </Text>
          </Animated.Image>
        </View>
      </Animated.View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
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
    resizeMode: "cover"
  },
  icon: {
    width: 50,
    height: 50
  }
});
