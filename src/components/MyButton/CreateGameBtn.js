import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InviteButton = props => {
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
  } = props;
  return (
    <TouchableOpacity
      style={[
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
      onPress={press}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default InviteButton;
