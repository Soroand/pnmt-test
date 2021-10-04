// @ts-check

import React from 'react';
import MyButton from '../MyButton';
import { H4 } from '../Typography';
import { KeyboardArrowLeftIcon } from '../SvgIcons';
import colors from '../../constants/colors';

/**
 * Renders back button for navigator header
 * @param {Object} props - Pass props to the BackButton
 * @param {Object} props.navigation - Navigation object
 * @param {boolean=} props.dark - If button color is dark
 */
const BackButton = ({ navigation, dark }) => {
  return (
    <MyButton
      style={{
        marginLeft: 17,
      }}
      colorOnPressed="transparent"
      color={dark ? colors.black : colors.white}
      onPress={navigation.goBack}
      iconLeft={
        <KeyboardArrowLeftIcon
          width={6}
          height={8}
          color={dark ? '#000' : '#fff'}
        />
      }
      iconLeftOffset={5}
      textWrapper={H4}
      type="link">
      Back
    </MyButton>
  );
};

export default BackButton;
