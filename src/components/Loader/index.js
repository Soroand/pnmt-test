// @ts-check

import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import GolfPin from '../../assets/icons/golfPin';
import { Vertical } from '../FlexDirections';
import { SpinnerIcon } from '../SvgIcons';

const Loader = () => {
  const spinner = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinner, {
        toValue: 100,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    // <Vertical alignCenter justifyCenter style={{ height: 200 }}>
    <Animated.View
      style={{
        transform: [
          {
            rotate: spinner.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}>
      <SpinnerIcon width={44} height={44} />
    </Animated.View>
    // </Vertical>
  );
};

export default Loader;
