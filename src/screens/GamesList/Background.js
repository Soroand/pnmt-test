// @ts-check

import React from 'react';
import { ImageBackground } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({ children, isEmpty }) => {
  return (
    <ImageBackground
      style={styles.image}
      // @ts-ignore
      source={require('assets/images/background.png')}>
      <LinearGradient
        colors={
          isEmpty ? ['#fff', '#fff'] : ['#fff', 'rgba(255, 255, 255, 0.1)']
        }>
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  image: {
    flex: 1,
  },
});

export default Background;
