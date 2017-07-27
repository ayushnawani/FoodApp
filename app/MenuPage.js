import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import { StackNavigator } from "react-navigation";
import Carousel from "react-native-looped-carousel";
import SquareGrid from "../react-native-square-grid";

const { width, height } = Dimensions.get("window");

const images = [
  {
    src: require(`../assets/imgmenu1.png`),
    address: "Lawrense Road, Casual Dining",
    status: "Open Now",
    name: "Cafe 5H by the Kitchen",
    rating: "3.9"
  },
  {
    src: require(`../assets/imgmenu2.png`),
    address: "American Cafe",
    status: "Open Now",
    name: "Truffles Ice & Spice",
    rating: "4.3"
  },
  {
    src: require(`../assets/imgmenu3.png`),
    address: "Lawrense Road, Casual Dining",
    status: "Open Now",
    name: "Beijing Bites",
    rating: "3.6"
  },
  {
    src: require(`../assets/imgmenu4.png`),
    address: "Lawrense Road, Casual Dining",
    status: "Open Now",
    name: "Londoners Bites",
    rating: "3.2"
  },
  {
    src: require(`../assets/imgmenu5.png`),
    address: "Lawrense Road, Casual Dining",
    status: "Open Now",
    name: "Big Wong",
    rating: "4.4"
  },
  {
    src: require(`../assets/imgmenu6.png`),
    address: "Chineese thai",
    status: "Open Now",
    name: "Tamura",
    rating: "4.1"
  },
  {
    src: require(`../assets/imgmenu7.png`),
    address: "Continental",
    status: "Open Now",
    name: "NYC Food Court",
    rating: "3.8"
  },
  {
    src: require(`../assets/imgmenu8.png`),
    address: "Thai",
    status: "Open Now",
    name: "Real Dzukou Thai",
    rating: "4.0"
  },
  {
    src: require(`../assets/imgmenu9.png`),
    address: "Chineese",
    status: "Open Now",
    name: "ChopSui King",
    rating: "3.9"
  },
  {
    src: require(`../assets/imgmenu10.png`),
    address: "Continental",
    status: "Closed Now",
    name: "Arab Chefs",
    rating: "4.7"
  },
  {
    src: require(`../assets/imgmenu11.png`),
    address: "Lawrense Road, Casual Dining",
    status: "Closed Now",
    name: "Los Angeles Sweet Food",
    rating: "3.9"
  },
  {
    src: require(`../assets/imgmenu12.png`),
    address: "Continental",
    status: "Closed Now",
    name: "Londoners Bites",
    rating: "3.9"
  }
];

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
  },
  item: {
    margin: 1,
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch"
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch"
  },
  text: {
    color: "white",
    fontSize: 32
  }
});

class MenuPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require("../assets/Menu_Btn_nrm.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  renderItem = item => {
    let statusColor = item.status == "Closed Now" ? "#585657" : "#F27C21";
    return (
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => {
          this.props.navigation.navigate("DetailPage", { item: item });
        }}
        onLongPress={() => alert("Long Pressed Me")}
      >
        <View style={styles.item}>
          <View style={{ flex: 2, alignItems: "stretch" }}>
            <Image
              style={{ flex: 1, width: null, height: null }}
              source={item.src}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 10 }}>
              <Text style={{ fontSize: 16, color: "#585657" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 13, color: "#A9A9A9" }}>
                {item.address}
              </Text>
            </View>
            <View
              style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ flex: 2 }}>
                <Text
                  style={{
                    color: statusColor,
                    fontSize: 11,
                    fontWeight: "bold"
                  }}
                >
                  {item.status}
                </Text>
              </View>
              <View style={{ margin: 5 }}>
                <Text
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    fontSize: 11
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <Image
                style={{
                  height: 18,
                  width: 18,
                  margin: 5,
                  alignSelf: "flex-end"
                }}
                source={require("../assets/star.png")}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  setCarousel = () => {
    return [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }].map(item =>
      <Image
        key={item.key}
        source={require("../assets/Head_Image.png")}
        style={[this.state.size]}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 8, backgroundColor: "#D3D3D3" }}>
        <View style={{ height: 20, backgroundColor: "#FF4500" }} />
        <View
          style={{
            flexDirection: "row",
            height: 40,
            backgroundColor: "#F27C21",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                backgroundColor: "#F27C21",
                color: "white",
                marginLeft: 10,
                marginTop: 10
              }}
            >
              We are happy to server you!
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                backgroundColor: "#F27C21",
                marginTop: 10,
                color: "white"
              }}
            >
              Menu
            </Text>
          </View>
          <Image
            style={{ margin: 10 }}
            source={require("../assets/Cart.png")}
          />
          <Image
            style={{ margin: 10, marginRight: 20 }}
            source={require("../assets/Search_21x21.png")}
          />
        </View>
        <View style={{ flex: 2 }} onLayout={this._onLayoutDidChange}>
          <Carousel
            delay={3000}
            style={this.state.size}
            autoplay={true}
            bullets={true}
          >
            {this.setCarousel()}
          </Carousel>
        </View>
        <View
          style={{ flex: 5, marginTop: 20, marginLeft: 20, marginRight: 20 }}
        >
          <SquareGrid
            rows={0}
            columns={3}
            items={images}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

class DetailPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={require("../assets/Menu_Btn_nrm.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
  };

  render() {
    let { item } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1, alignItems: "stretch" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold"
            }}
          >
            {item.name}
          </Text>
        </View>
        <Image
          style={{ flex: 4, width: null, height: null }}
          source={item.src}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold"
            }}
          >
            Address : {item.address}
          </Text>
        </View>
        <View style={{ flex: 6 }} />
      </View>
    );
  }
}

const MenuNavigator = StackNavigator({
  MenuPage: {
    screen: MenuPage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      title: "Details"
    }
  }
});

export default MenuNavigator;
