// @ts-check

import React from 'react';
import { Vertical, H2, H4, MyButton } from '../../../components';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../constants/colors';

const Connect = ({ title, onPress }) => (
  <Vertical style={styles.container}>
    <H2>Connect</H2>
    <H4 style={styles.description}>
      Find your {title} friends{'\n'}on Pinmate
    </H4>
    <MyButton
      color={colors.lightBlue}
      size="md"
      type="outline"
      onPress={onPress}>
      Connect
    </MyButton>
  </Vertical>
);

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '130@ms',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: '5@ms',
    marginBottom: '25@ms',
  },
});

export default Connect;
