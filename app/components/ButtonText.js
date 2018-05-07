import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class ButtonText extends Component {
  render() {
      const {color,text} = this.props
    return (
      <View>
        <Text style={[styles.btnText,{color:color}]}> {text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 2
  }
});

export default ButtonText;
