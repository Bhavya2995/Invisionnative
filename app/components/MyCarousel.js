import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ButtonText from "../components/ButtonText";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

class MyCarousel extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        { title: require("../images/product1.png") },
        { title: require("../images/product2.png") },
        { title: require("../images/product3.png") },
        { title: require("../images/product4.png") }
      ],
      activeSlide: 0
    };
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "#fff" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#1644ac"
        }}
        inactiveDotStyle={{
          backgroundColor: "#d4d4d4"
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        inactiveDotOpacity={0.4}
        carouselRef={this._carousel}
        tappableDots={!!this._carousel}
      />
    );
  }
  wp(percentage) {
    const value = percentage * viewportWidth / 100;
    return Math.round(value);
  }

  _renderItem({ item, index }) {
    return (
      <View>
        <Image source={item.title} style={{ width: 300 }} />
      </View>
    );
  }
  render() {
    const slideHeight = viewportHeight * 0.36;
    const slideWidth = this.wp(75);
    const itemHorizontalMargin = this.wp(2);

    const sliderWidth = viewportWidth;
    const itemWidth = slideWidth + itemHorizontalMargin * 2;
    return (
      <View style={styles.container}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={0}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        <View style={styles.addCartBtnView}>
          <TouchableNativeFeedback
            onPress={() => {}}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
            <View style={styles.addCartBtn}>
              <ButtonText color="#fff" text="Add To Cart" />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.paginationView}>{this.pagination}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30
  },
  addCartBtn: {
    width: 200,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#43d87a",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  addCartBtnView: { position: "relative", bottom: 75, left: 75 },
  paginationView: { position: "relative", bottom: 50 }
});
export default MyCarousel;
