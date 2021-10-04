// @ts-check

import React, { useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import ReactCarousel, { Pagination } from 'react-native-snap-carousel';
import { ScaledSheet } from 'react-native-size-matters';
import uuid from 'react-native-uuid';

const Carousel = ({ images }) => {
  const sliderWidth = Dimensions.get('window').width;
  const [sliderIndex, setSliderIndex] = useState(0);
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={styles.image}
          source={
            item?.length === 5
              ? require('../../assets/images/noClub.png')
              : { uri: item }
          }
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ReactCarousel
        data={images}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        inactiveSlideScale={1}
        itemWidth={sliderWidth}
        onSnapToItem={index => setSliderIndex(index)}
        sliderHeight={230}
        itemHeight={230}
      />
      <Pagination
        containerStyle={styles.pagination}
        activeDotIndex={sliderIndex}
        dotsLength={images?.length}
        dotStyle={styles.dotStyle}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'relative',
  },
  pagination: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'stretch',
  },
  dotStyle: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});

export default Carousel;
