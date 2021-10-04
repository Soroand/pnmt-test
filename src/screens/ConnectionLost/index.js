// @ts-check

import React from 'react';
import { MySafeAreaView, Vertical, H1, H4, MyButton } from '../../components';
import { ConnectionLost as ConnectionLostImage } from '../../components/SvgImages';
import styles from './styles';
import colors from '../../constants/colors';

const ConnectionLost = ({}) => {
  return (
    <MySafeAreaView>
      <Vertical style={styles.container} alignCenter justifyCenter>
        <ConnectionLostImage style={styles.image} />
        <H1 style={styles.title}>Connection Failed</H1>
        <H4 color={colors.lightGrey} style={styles.description}>
          Could not connect to the network,{'\n'}Please check and try again
        </H4>
        <MyButton
          size="md"
          gradientColors={colors.blueGradient}
          onPress={() => {}}>
          Retry
        </MyButton>
      </Vertical>
    </MySafeAreaView>
  );
};

export default ConnectionLost;
