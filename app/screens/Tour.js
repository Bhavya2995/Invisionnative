import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Modal,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LogoImage from "../components/LogoImage";
import ButtonText from "../components/ButtonText";
import HeaderText from "../components/HeaderText";

class Tour extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
    this.setModalVisibility = this.setModalVisibility.bind(this);
  }
  setModalVisibility(visibility) {
    this.setState({ modalVisible: visibility });
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={require("../images/bgtour12.jpg")}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <LogoImage />
          <TouchableNativeFeedback
            onPress={()=>{this.props.navigation.navigate('SignIn')}}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.logInBtn}>
              <ButtonText color="#fff" text="LOG IN" />
            </View>
          </TouchableNativeFeedback>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => console.log("closed")}
          >
            <View style={styles.container}>
              <View style={styles.modalView}>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.setModalVisibility(!this.state.modalVisible);
                  }}
                  background={TouchableNativeFeedback.SelectableBackground()}
                >
                  <View style={styles.close}>
                    <Icon name="close" size={25} color="#000" />
                  </View>
                </TouchableNativeFeedback>
                <View style={styles.container}>
                  <Image
                    source={require("../images/tour-tick.png")}
                    style={styles.tourImage}
                  />
                </View>
                <View style={styles.tourText}>
                  <HeaderText
                    ownStyles={{ fontSize: 50, paddingBottom: 40 }}
                    text="Title"
                  />
                  <HeaderText
                    ownStyles={{ fontSize: 15 }}
                    text="Thus much I thought proper"
                  />
                  <HeaderText
                    ownStyles={{ fontSize: 15 }}
                    text="to tell you in relation to"
                  />
                  <HeaderText
                    ownStyles={{ fontSize: 15 }}
                    text="yourself, and to the trust you"
                  />
                  <HeaderText
                    ownStyles={{ fontSize: 15 }}
                    text="I reposed in you"
                  />
                </View>
              </View>
            </View>
          </Modal>
          <TouchableNativeFeedback
            onPress={() => this.setModalVisibility(true)}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.tourBtn}>
              <ButtonText color="#fff" text="TAKE THE TOUR" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bgImage: {
    width: "100%",
    height: "100%"
  },
  logInBtn: {
    width: 200,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#43d87a",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 225,
    marginBottom: 20
  },
  tourBtn: {
    width: 200,
    height: 50,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    width: "90%",
    height: "95%",
    backgroundColor: "#fff",
    borderRadius: 5
  },
  close: {
    position: "relative",
    left: "90%",
    top: 7
  },
  tourImage: {
    width: 200,
    height: 200
  },
  tourText: {
    flex: 1,
    alignItems: "center"
  }
});

export default Tour;
