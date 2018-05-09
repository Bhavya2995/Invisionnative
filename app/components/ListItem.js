import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderText from "./HeaderText";

export default class ListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
      <View style = {{paddingRight : 8, position:'relative',top:12}} >
        <Icon name="circle" color="#000" size={8} />
        </View>

        <HeaderText text={this.props.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
      flexDirection :"row",
    padding: 15
  }
});
