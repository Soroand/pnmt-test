import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { H2 } from '../../components';
import CloseBtn from '../../assets/icons/close';
import styles from './style';
import colors from '../../constants/colors';

const Message = ({
  children,
  isVisible,
  setIsVisible,
  fullScreen,
  customeStyles,
  bgOpacity,
}) => {
  return (
    isVisible &&
    (fullScreen ? (
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(0,0,0,${bgOpacity})`,
        }}>
        <View style={[styles.message, customeStyles]}>
          <View style={styles.closeBtn}>
            <TouchableOpacity
              onPressIn={() => {
                setIsVisible(false);
              }}>
              <CloseBtn color={colors.customBlack} />
            </TouchableOpacity>
          </View>
          <H2>{children}</H2>
        </View>
      </View>
    ) : (
      <View style={[styles.message, customeStyles]}>
        <View style={styles.closeBtn}>
          <TouchableOpacity
            onPressIn={() => {
              setIsVisible(false);
            }}>
            <CloseBtn color={colors.customBlack} />
          </TouchableOpacity>
        </View>
        <H2>{children}</H2>
      </View>
    ))
  );
};

export default Message;
