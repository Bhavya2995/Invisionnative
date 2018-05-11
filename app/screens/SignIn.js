import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderText from "../components/HeaderText";
import LogoImage from "../components/LogoImage";
import ButtonText from "../components/ButtonText";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    // this.textInput = React.createRef();
  }
  clearText = () => {
    this._textInput.setNativeProps({text: ''});
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={styles.headerTitle}>
          <HeaderText text="Sign In" />
        </View>
      ),
      headerStyle: styles.headerStyle
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <LogoImage />
        </View>
        <View style={styles.formView}>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              style={styles.inputText}
              placeholder="EMAIL"
              placeholderTextColor="#353232"
              name="email"
              value={this.state.email}
              keyboardType="email-address"
              selectionColor="#c1c0c1"
              underlineColorAndroid="#c1c0c1"
              onChangeText={text => this.setState({ email: text })}
              blurOnSubmit={true}
            />
          </View>
          <TextInput
            ref={input => {
              this.textInput = input;
            }}
            style={styles.inputText}
            placeholder="PASSWORD"
            placeholderTextColor="#353232"
            name="password"
            value={this.state.password}
            selectionColor="#c1c0c1"
            underlineColorAndroid="#c1c0c1"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableNativeFeedback
            onPress={this._onPress}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.googleBtn}>
              <ButtonText color="red" text="SIGN IN VIA GOOGLE" />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.btnView}>
          <TouchableNativeFeedback
            onPress={this._onPress}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.fbBtn}>
              <ButtonText color="blue" text="SIGN IN VIA FACEBOOK" />
            </View>
          </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback
          onPress={() => {
            this.props.navigation.navigate("ProductPage");
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.forwardBtn}>
            <Icon name="arrow-right" size={30} color="#fff" />
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
  logoView: {
    flex: 1,
    marginTop: 25
  },
  formView: {
    flex: 3,
    width: "85%"
  },
  btnView: {
    flex: 1
  },
  inputText: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 1
  },
  headerStyle: {
    backgroundColor: "#f4f3f3",
    elevation: 0,
    shadowOpacity: 0
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15%"
  },
  fbBtn: {
    width: 260,
    height: 50,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  googleBtn: {
    width: 260,
    height: 50,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  forwardBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "#43d87a",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SignIn;
