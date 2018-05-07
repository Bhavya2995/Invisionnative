import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

class LogoImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require("../images/splash-logo.png")}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 90,
    width: 90
  }
});

export default LogoImage;