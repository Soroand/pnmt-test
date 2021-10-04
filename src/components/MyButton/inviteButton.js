import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';

const InviteButton = props => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: props.borderColor ? 1 : 0,
      borderColor: props.borderColor || 'white',
      borderRadius: 25,
      justifyContent: 'center',
    },
  });

  const {
    title,
    color,
    bgColor,
    press,
    width,
    height,
    fontSize,
    linearGradient,
    linearGradientColors,
  } = props;

  return linearGradient ? (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: `${bgColor}`,
          width: width,
          height: height,
        },
      ]}
      onPress={press}>
      <LinearGradient
        colors={linearGradientColors || ['#3F9952', '#9FDD51']}
        style={[
          styles.container,
          {
            backgroundColor: `${bgColor}`,
            width: width,
            height: height,
          },
        ]}
        start={{ x: 0, y: 1.2 }}
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
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[
        styles.container,
        {
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

export default InviteButton;
