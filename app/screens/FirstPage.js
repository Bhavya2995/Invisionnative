import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableNativeFeedback } from "react-native";
import HeaderText from "../components/HeaderText";
import LogoImage from "../components/LogoImage";
import Icon from "react-native-vector-icons/Entypo";

class FirstPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("SignUp")}
          useForeground={true}
        >
          <View style={styles.signUp}>
            <HeaderText text="SIGN UP" />
          </View>
        </TouchableNativeFeedback>
      ),
      headerStyle: styles.headerStyle
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <LogoImage />
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate("Tour")}
          useForeground={true}
          background = {TouchableNativeFeedback.Ripple('#f4f3f3',false)}
        >
          <View style={styles.arrow}>
            <Icon name="chevron-thin-right" size={40} color="#333333" />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f3f3"
  },
  arrow: {
    marginTop: 125
  },

  headerStyle: {
    backgroundColor: "#f4f3f3",
    elevation: 0,
    shadowOpacity: 0
  },
  signUp: {
    marginRight: 15,
    marginTop: 10
  }
});
export default FirstPage;