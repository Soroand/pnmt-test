import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { H2 } from '../../../../../components';
import CloseBtn from '../../../../../assets/icons/close';
import styles from '../styles';
import colors from '../../../../../constants/colors';

const Message = () => {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <View style={styles.message}>
        <View style={styles.closeBtn}>
          <TouchableOpacity onPressIn={() => setVisible(false)}>
            <CloseBtn color={colors.customBlack} />
          </TouchableOpacity>
        </View>
        <H2>
          When the game creator accepts your request, we will send a
          notification.
        </H2>
      </View>
    )
  );
};

export default Message;
