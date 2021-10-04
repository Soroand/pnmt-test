// @ts-check

import React from 'react';

import { Send } from 'react-native-gifted-chat';

import { SendIcon } from '../../../../components/SvgIcons';
import { ScaledSheet } from 'react-native-size-matters';

const CutomSend = props => (
  <Send {...props} containerStyle={styles.send}>
    <SendIcon width={30} height={30} />
  </Send>
);

const styles = ScaledSheet.create({
  send: {
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
});

export default CutomSend;
