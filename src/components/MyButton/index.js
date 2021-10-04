// @ts-check
import React, { useState } from 'react';

import { View, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';

import '../../typedefs';
import styles from './styles';
import { ST, H2 } from '../Typography';

/**
 * Renders Button component
 * @param {Object} props - Props passed to Button
 * @param {React.ReactNode=} props.children - content of Button
 * @param {string=} props.color - Set color of background (use colors constant)
 * @param {React.ReactText[]=} props.gradientColors - Set colors for gradient background (use colors constant)
 * @param {callbackFunction} props.onPress - Handles onPress on Button
 * @param {boolean=} props.disabled - For checking if disabled
 * @param {boolean=} props.fullWidth - If width is 100%
 * @param {Object=} props.style - Additional styles applied on wrapper Container
 * @param {"sm" | "md" | "lg"=} props.size - Size of Button
 * @param {"button" | "link" | "outline" | "nonGradient"=} props.type - Type of Button
 * @param {React.ReactNode=} props.iconRight - Icon to be rendered on right
 * @param {React.ReactNode=} props.iconLeft - Icon to be rendered on left
 * @param {number=} props.iconLeftOffset - Distance between left icon and content
 * @param {number=} props.iconRightOffset - Distance between right icon and content
 * @param {Function=} props.textWrapper - content text wrapper
 * @param {Object=} props.textStyle - text style
 * @param {string=} props.colorOnPressed - Set color of background when pressed.
 */
const MyButton = ({
  color,
  gradientColors,
  children,
  onPress,
  disabled,
  fullWidth,
  style,
  size = 'sm',
  type = 'button',
  iconRight,
  iconLeft,
  iconLeftOffset,
  iconRightOffset,
  textWrapper,
  textStyle,
  colorOnPressed,
  requested,
}) => {
  const [pressed, setPressed] = useState(false);
  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);

  const buttonGradientColorTable = {
    outline: disabled
      ? [colors.transparent, colors.transparent]
      : pressed
      ? [color, color]
      : [colors.transparent, colors.transparent],
    link: [colors.transparent, colors.transparent],
    button:
      disabled && !requested
        ? [colors.disabledButton, colors.disabledButton]
        : pressed
        ? colorOnPressed
          ? [colorOnPressed, colorOnPressed]
          : colors.blueButtonPressed
        : gradientColors,
    nonGradient: disabled
      ? [colors.disabledButton, colors.disabledButton]
      : pressed
      ? colorOnPressed
        ? [colorOnPressed, colorOnPressed]
        : colors.blueButtonPressed
      : [color, color],
  };

  const buttonStyleTable = {
    outline: [
      styles.default,
      styles.outline,
      styles[`size__${size}`],
      { borderColor: disabled ? colors.disabledButton : color },
      fullWidth && styles.fullWidth,
      style && style,
    ],
    link: [
      styles.default,
      styles.link,
      fullWidth && styles.fullWidth,
      style && style,
    ],
    button: [
      styles.default,
      styles[`size__${size}`],
      fullWidth && styles.fullWidth,
      style && style,
    ],
    nonGradient: [
      styles.default,
      styles[`size__${size}`],
      fullWidth && styles.fullWidth,
      style && style,
    ],
  };

  const textColorTable = {
    outline: disabled
      ? colors.lightGrey
      : pressed
      ? color === '#ffffff'
        ? colors.black
        : colors.white
      : color,
    link: disabled
      ? colors.lightGrey
      : // : pressed
        // ? color === '#ffffff'
        //   ? colors.black
        //   : colors.white
        color,
    button: disabled ? colors.lightGrey : colors.white,
    nonGradient: disabled ? colors.lightGrey : colors.white,
  };

  const LeftIcon = () => {
    return (
      <View
        style={[
          styles.leftIcon,
          iconLeftOffset && { marginRight: iconLeftOffset },
          pressed && { opacity: 0 },
        ]}>
        {iconLeft}
      </View>
    );
  };

  const RightIcon = () => {
    return (
      <View
        style={[
          styles.rightIcon,
          iconRightOffset && { marginLeft: iconRightOffset },
          pressed && { opacity: 0 },
        ]}>
        {iconRight}
      </View>
    );
  };

  const RenderContent = () => {
    const Text = textWrapper ? textWrapper : size === 'sm' ? ST : H2;

    return (
      <>
        {iconLeft && <LeftIcon />}

        <Text
          color={color || textColorTable[type]}
          style={[textStyle, type === 'link' && pressed && { opacity: 0.5 }]}>
          {children}
        </Text>

        {iconRight && <RightIcon />}
      </>
    );
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}>
      <LinearGradient
        colors={buttonGradientColorTable[type]}
        style={buttonStyleTable[type]}>
        {RenderContent()}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MyButton;
