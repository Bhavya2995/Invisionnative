import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  FlatList
} from "react-native";
import HeaderText from "../HeaderText";
import { TabNavigator } from "react-navigation";
import ButtonText from "../ButtonText";
import ListItem from "../ListItem";

class InfoDelContainer extends Component {
  constructor() {
    super();
    this.state = {
      info: true,
      delivery: false,
      list: [
        { title: "interior chin guard" },
        {
          title:
            "oversize, adjustable contoured, crossed hood with cord insidewith labeled leather length regulator on it"
        },
        { title: "rib cuffs with thumbholes" },
        { title: "pinetree label on the back" }
      ]
    };
  }
  onInfoTab = () => {
    if (!this.state.info) {
      this.setState({
        info: !this.state.info,
        delivery: !this.state.delivery
      });
    }
  };
  onDeliveryTab = () => {
    if (!this.state.delivery) {
      this.setState({
        info: !this.state.info,
        delivery: !this.state.delivery
      });
    }
  };
  _keyExtractor = (item, index) => index.toString();

  renderInfo() {
    return (
      <View style={styles.tabView}>
        <HeaderText text="Urban ninjas favourite hoodies for leisure times" />
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => (
            <View>
              <ListItem title={item.title} />
            </View>
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
  renderDelivery() {
    return (
      <View style={styles.tabView}>
        <HeaderText text="Delivery" />
      </View>
    );
  }
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableNativeFeedback onPress={this.onInfoTab}>
            <View
              style={[
                styles.tabStyle,
                styles.infoTab,
                this.state.info && styles.activeTab
              ]}
            >
              <HeaderText text="INFO" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.onDeliveryTab}>
            <View
              style={[styles.tabStyle, this.state.delivery && styles.activeTab]}
            >
              <HeaderText text="DELIVERY" />
            </View>
          </TouchableNativeFeedback>
        </View>
        {this.state.info ? this.renderInfo() : this.renderDelivery()}
        <TouchableNativeFeedback
          onPress={() => {}}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.addCartBtnBig}>
            <ButtonText text="ADD TO CART" color="#fff" />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabStyle: {
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  infoTab: {
    borderRightWidth: 1,
    borderRightColor: "#ccc"
  },
  tabView: {
    flex: 1,
    padding: 10
  },
  activeTab: {
    borderBottomColor: "#0542aa",
    borderBottomWidth: 4
  },
  addCartBtnBig: {
    width: "100%",
    height: 60,
    backgroundColor: "#43d87a",
    justifyContent: "center",
    alignItems: "center"
  }
});
// const InfoDelTab = TabNavigator({
//     Info : {
//         screen : Info
//     },
//     Delivery : {
//         screen:Delivery
//     }
// },{
//     tabBarPosition:'top'
// })

export default InfoDelContainer;
