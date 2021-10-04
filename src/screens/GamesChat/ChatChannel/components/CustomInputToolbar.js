// @ts-check

import React from 'react';
import { InputToolbar } from 'react-native-gifted-chat';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';
import { Platform } from 'react-native';

export const CustomInputToolbar = props => (
  <InputToolbar
    {...props}
    containerStyle={styles.container}
    primaryStyle={styles.primary}
  />
);

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: '10@ms',
  },
  primary: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: Platform.OS === 'ios' ? 10 : 18,
  },
});

export default CustomInputToolbar;
