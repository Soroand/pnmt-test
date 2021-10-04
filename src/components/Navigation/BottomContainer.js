// @ts-check

import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Platform } from 'react-native';

const BottomContainer = ({ children, withoutOffset }) => {
  const styles = ScaledSheet.create({
    container: {
      position: 'absolute',
      bottom: Platform.OS === 'ios' ? '0%' : '0%',
      height:
        Platform.OS === 'ios'
          ? DeviceInfo.hasNotch()
            ? '95@ms'
            : '100@ms'
          : '80@ms',
      left: 0,
      width: '100%',
      backgroundColor: '#fff',
      paddingVertical: '15@ms',
      paddingHorizontal: '25@ms',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.19)',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowRadius: 30,
      elevation: 5,
      zIndex: 5,
      shadowOpacity: 1,
    },
  });

  return <View style={[styles.container]}>{children}</View>;
};

export default BottomContainer;
