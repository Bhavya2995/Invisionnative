import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class HeaderText extends Component {
  render() {
    const { text, ownStyles } = this.props;
    return (
      <View>
        <Text {...this.props} style={[styles.headerText, ownStyles]}>
          {" "}
          {text}{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: "#333333",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 2
  }
});

export default HeaderText;
