// @ts-check

import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Horizontal, BT } from '../../components';
import styles from './styles';

const Dropdown = ({ gamesFilter, onChange }) => {
  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={[styles.dropdownItem, styles.dropdownDivider]}
        onPressIn={() => onChange('Nearby')}>
        <Horizontal>
          <View
            style={
              gamesFilter === 'Nearby'
                ? styles.dropdownCircleActive
                : styles.dropdownCircle
            }
          />
          <BT>Nearby</BT>
        </Horizontal>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.dropdownItem]}
        onPressIn={() => onChange('Popular')}>
        <Horizontal>
          <View
            style={
              gamesFilter === 'Popular'
                ? styles.dropdownCircleActive
                : styles.dropdownCircle
            }
          />
          <BT>Popular</BT>
        </Horizontal>
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;
