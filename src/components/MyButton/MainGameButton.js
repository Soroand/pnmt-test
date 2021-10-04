import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MainButton = props => {
  const [pressed, setPressed] = useState(false);
  const [inactive, setInactive] = useState(false);
  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);
  const {
    title,
    color,
    bgColor,
    press,
    width,
    height,
    fontSize,
    borWidth,
    borColor,
    borRadius,
    borRadiusTL,
    borRadiusTR,
    borRadiusBR,
    borRadiusBL,
    style,
    deActivation,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={inactive ? null : onPressIn}
      onPressOut={inactive ? null : onPressOut}
      style={[
        style,
        styles.container,
        {
          borderTopLeftRadius: borRadiusTL,
          borderTopRightRadius: borRadiusTR,
          borderBottomRightRadius: borRadiusBR,
          borderBottomLeftRadius: borRadiusBL,
          borderRadius: borRadius,
          borderWidth: borWidth,
          borderColor: `${borColor}`,
          backgroundColor: `${bgColor}`,
          width: width,
          height: height,
        },
      ]}
      onPress={() => {
        if (deActivation) {
          inactive ? null : (press(), setInactive(true));
        } else {
          press();
        }
      }}>
      {pressed ? (
        <LinearGradient
          colors={['#515BF1', '#242AC8']}
          style={[
            styles.container,
            { height: height || 55, borderRadius: borRadius || 50 },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: fontSize,
                color: `${color}`,
                textAlign: 'center',
              }}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={inactive ? ['#dbdbdb', '#dbdbdb'] : ['#515BF1', '#242AC8']}
          style={[
            styles.container,
            { height: height || 55, borderRadius: borRadius || 50 },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: fontSize,
                color: inactive ? '#c7c7c7' : color,
                textAlign: 'center',
              }}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default MainButton;
