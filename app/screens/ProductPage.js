import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  ScrollView,
  Picker
} from "react-native";
import { ToastAndroid } from "react-native";
import Caraousel, { Pagination } from "react-native-snap-carousel";
import HeaderText from "../components/HeaderText";
import MyCarousal from "../components/MyCarousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      wishlisted: false,
      size: ""
    };
    this._changeWishList = this._changeWishList.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <View style={styles.headerTitle}>
          <HeaderText text="NightRise TShirt" />
        </View>
      ),
      headerStyle: styles.headerStyle,
      headerRight: (
        <TouchableNativeFeedback
          onPress={params.changeWishList}
          background={TouchableNativeFeedback.Ripple("transparent", true)}
        >
          <View style={styles.wishListIcon}>
            {params.wishlisted ? (
              <Icon name="heart" size={30} color="#ff3f3f" />
            ) : (
              <Icon name="heart-outline" size={30} />
            )}
          </View>
        </TouchableNativeFeedback>
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({
      changeWishList: this._changeWishList,
      wishlisted: this.state.wishlisted
    });
  }
  _changeWishList() {
    this.setState({ wishlisted: !this.state.wishlisted });
    this.props.navigation.setParams({ wishlisted: !this.state.wishlisted });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollview}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          <View style={{ flex: 1 }}>
            <MyCarousal />
          </View>
          <View style={styles.sizeView}>
            <View style={styles.picker}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.size}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ size: itemValue });
                }}
              >
                <Picker.Item label="Small" value="small" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Large" value="large" />
              </Picker>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerStyle: {
    backgroundColor: "#f4f3f3",
    elevation: 0,
    shadowOpacity: 0
  },
  wishListIcon: {
    paddingRight: 15
  },
  container: {
    backgroundColor: "#f4f3f3",
    flex: 1
  },
  scrollview: {
    flex: 1
  },
  sizeView: {
    flex: 0.3,
    flexDirection: "row"
  },
  picker: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#333",
    margin: 10,
    width: 150
  },
});
