import React from 'react';
import { View } from 'react-native';
import { InviteButton } from '..';
import colors from '../../constants/colors';
import styles from './styles';

const Button = ({ onClick }) => {
  return (
    <View style={styles.playerButton}>
      <InviteButton
        width={'100%'}
        height={28}
        title="Remove"
        fontSize={13}
        bgColor="transparent"
        color={colors.customBlack}
        borderColor={colors.customBlack}
        press={onClick}
      />
    </View>
  );
};

export default Button;
