import React from 'react';
import { Composer } from 'react-native-gifted-chat';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const CustomComposer = props => (
  <Composer {...props} textInputStyle={styles.textInputStyle} />
);

const styles = ScaledSheet.create({
  textInputStyle: {
    height: '30@ms',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    color: '#222B45',
    marginLeft: '10@ms',
    marginRight: '5@ms',
    paddingTop: '7@ms',
    paddingBottom: '9@ms',
    paddingLeft: '10@ms',
    paddingRight: '25@ms',
    fontSize: '12@ms',
    lineHeight: '14@ms',
    overflow: 'hidden',
  },
});

export default CustomComposer;
