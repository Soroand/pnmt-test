// @ts-check

import React from 'react';
import { Vertical, Horizontal } from '../FlexDirections';
import { H4, BT } from '../Typography';
import { SunnyIcon, WindIcon } from '../SvgIcons';
import styles from './styles';
import colors from '../../constants/colors';
import { Text } from 'react-native';

/**
 * Renders weather card
 * @param {Object} props - Pass props to Weather
 * @param {number} props.temperature - Temperature
 * @param {number} props.wind - Speed of wind
 * @param {string=} props.weather - Weather type, e.g `sunny`, `foggy`
 * @param {boolean=} props.white - If text of card is white
 * @param {boolean=} props.small
 */
const Weather = ({ temperature, weather, wind, white, small }) => {
  return (
    <Horizontal style={styles.container}>
      <Text
        style={[
          { color: white ? colors.white : colors.customBlack },
          styles.temperature,
          small && {fontSize: 18}
        ]}>
        {temperature}°
      </Text>
      <SunnyIcon
        width={small ? 22 : 26}
        height={small ? 22 : 26}
        color={white ? colors.white : colors.customBlack}
        style={[styles.weatherIcon, small && {marginHorizontal: 5}]}
      />
      <Vertical style={[styles.windContainer]}>
        <WindIcon
          color={white ? colors.white : colors.customBlack}
          width={small ? 10 : 12}
          height={small ? 10 : 12}
        />
        <BT
          color={white ? colors.white : colors.customBlack}
          style={styles.wind}
        >
          {wind} m/h
        </BT>
      </Vertical>
    </Horizontal>
  );
};

export default Weather;
