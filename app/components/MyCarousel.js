import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

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
        containerStyle={{ backgroundColor: "#f4f3f3" }}
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
        {this.pagination}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30
  }
});
export default MyCarousel;
