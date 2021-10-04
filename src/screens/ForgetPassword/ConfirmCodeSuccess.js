// @ts-check

import React from 'react';
import { MyButton, Vertical, MySafeAreaView, H1, H2 } from '../../components';
import { ConfirmCodeSuccess as ConfirmCodeSuccessImage } from '../../components/SvgImages';
import styles from './styles';
import colors from '../../constants/colors';

const ConfirmCodeSuccess = ({ navigation }) => {
  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <MySafeAreaView>
      <Vertical style={[styles.container, styles.formView]}>
        <H1 style={styles.title} color={colors.customBlack}>
          Password reset successful
        </H1>

        <H2 style={styles.description} color={colors.customBlack}>
          Please go to settings and update your password.
        </H2>
        <ConfirmCodeSuccessImage style={styles.image} />
        <MyButton
          gradientColors={colors.blueGradient}
          size="lg"
          style={styles.button}
          onPress={handleGoToLogin}>
          Update password
        </MyButton>
      </Vertical>
    </MySafeAreaView>
  );
};

export default ConfirmCodeSuccess;
