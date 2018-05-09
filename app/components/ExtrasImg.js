import React, { Component } from "react";
import { Text, StyleSheet, View, Image, SectionList } from "react-native";
import HeaderText from "./HeaderText";

export default class ExtrasImg extends Component {
  constructor() {
    super();
    this.state = {
      imgList: [
        {
          src: require("../images/extra1.png"),
          title: "Tshirt1",
          price: "$20"
        },
        {
          src: require("../images/extra2.png"),
          title: "Tshirt1",
          price: "$20"
        },
        { src: require("../images/extra3.png"), title: "Tshirt1", price: "$20" }
      ]
    };
  }
  renderImg(data) {}
  render() {
    return (
      <View style={styles.imgListView}>
        <View style={styles.imgView}>
          <Image
            source={require("../images/extra1.png")}
            style={styles.imgDimension}
          />
          <HeaderText text="Tshirt1" />
          <HeaderText text="$20" />
        </View>
        <View style={styles.imgView}>
          <Image
            source={require("../images/extra2.png")}
            style={styles.imgDimension}
          />
          <HeaderText text="Tshirt2" />
          <HeaderText text="$30" />
        </View>
        <View style={styles.imgView}>
          <Image
            source={require("../images/extra3.png")}
            style={styles.imgDimension}
          />
          <HeaderText text="Tshirt3" />
          <HeaderText text="$40" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgView: { justifyContent: "center", alignItems: "center" },
  imgListView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  },
  imgDimension: { width: 160, height: 300 }
});
