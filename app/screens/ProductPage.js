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
import InfoDelTab from "../components/InfoDel/InfoDelTab";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InfoDelContainer from "../components/InfoDel/InfoDelTab";
import ExtraImg from "../components/ExtrasImg";

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
          <View style={{ marginBottom: -50 }}>
            <MyCarousal />
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
              <View style={styles.iconView}>
                <Icon name="circle" color="#0542aa" size={40} />
                <Icon name="check-circle" color="#3b3b3b" size={40} />
              </View>
            </View>
          </View>

          <View style={styles.emptyContainer} />

          <View style={{ flex: 1 }}>
            <InfoDelContainer />
          </View>

          <View style = {{flexDirection:"row",justifyContent:"center",padding:10}}>
          <HeaderText text = "Also in this category" ownStyles = {{color : "#dbdbdb"}} />
          </View>
          <ExtraImg />
          <TouchableNativeFeedback
          onPress={() => {}}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.backwardBtn}>
            <Icon name="arrow-left" size={30} color="#fff" />
          </View>
        </TouchableNativeFeedback>
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
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0
  },
  wishListIcon: {
    paddingRight: 15
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  emptyContainer: {
    backgroundColor: "#f4f3f3",
    height: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderBottomColor: "#ccc"
  },
  scrollview: {
    flex: 1
  },
  sizeView: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    bottom: 85
  },
  iconView: {
    flexDirection: "row"
  },
  picker: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#333",
    margin: 10,
    width: 150
  },
  backwardBtn : {
    width:'100%',
    height : 60,
    backgroundColor: "#1d1d1d",
    justifyContent:'center',
    alignItems:'center'
  }
});
