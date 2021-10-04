// @ts-check

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Vertical, Horizontal, H2, MyButton } from '../../../components';
import styles from './styles';
import colors from '../../../constants/colors';
import { FilterContext } from '../../../context/FilterContext';
import Calendar from './Calendar';
const FilterSheet = ({}) => {
  const { players, setPlayers, date, setDate, bottomSheetDate } = useContext(
    FilterContext,
  );

  return (
    <Vertical style={styles.bottomSheet}>
      <H2>Player count</H2>
      <Horizontal style={styles.bottomSheetPlayerCountContainer}>
        <TouchableOpacity onPress={() => setPlayers(1)}>
          <View
            style={[
              styles.bottomSheetPlayerCount,
              players === 1 && styles.bottomSheetPlayerCount__active,
            ]}>
            <Text
              style={[
                styles.bottomSheetPlayerCountText,
                players === 1 && styles.bottomSheetPlayerCountText__active,
              ]}>
              1
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPlayers(2)}
          style={[
            styles.bottomSheetPlayerCount,
            players === 2 && styles.bottomSheetPlayerCount__active,
          ]}>
          <Text
            style={[
              styles.bottomSheetPlayerCountText,
              players === 2 && styles.bottomSheetPlayerCountText__active,
            ]}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPlayers(3)}
          style={[
            styles.bottomSheetPlayerCount,
            players === 3 && styles.bottomSheetPlayerCount__active,
          ]}>
          <Text
            style={[
              styles.bottomSheetPlayerCountText,
              players === 3 && styles.bottomSheetPlayerCountText__active,
            ]}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPlayers(4)}
          style={[
            styles.bottomSheetPlayerCount,
            players === 4 && styles.bottomSheetPlayerCount__active,
          ]}>
          <Text
            style={[
              styles.bottomSheetPlayerCountText,
              players === 4 && styles.bottomSheetPlayerCountText__active,
            ]}>
            4
          </Text>
        </TouchableOpacity>
      </Horizontal>
      <H2>Date and time</H2>
      <Calendar />

      <Vertical style={styles.bottomButton}>
        <MyButton
          gradientColors={colors.blueGradient}
          size="lg"
          onPress={() => bottomSheetDate.current.snapTo(1)}>
          Done
        </MyButton>
      </Vertical>
    </Vertical>
  );
};

export default FilterSheet;
