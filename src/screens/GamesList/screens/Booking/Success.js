// @ts-check

import React from 'react';
import { Text } from 'react-native';
import {
  MyButton,
  MySafeAreaView,
  Vertical,
  BottomContainer,
  H3,
} from '../../../../components';
import { PlusIcon } from '../../../../components/SvgIcons';
import { SuccessField } from '../../../../components/SvgImages';
import styles from './styles';
import colors from '../../../../constants/colors';

const Success = ({ navigation }) => {
  const handleGoToGamesList = () => {
    navigation.replace('GameList');
  };

  return (
    <MySafeAreaView>
      <Vertical style={styles.successContainer}>
        <Vertical style={styles.successImage}>
          <SuccessField />
        </Vertical>

        <Text style={styles.successTitle}>Booking complete!</Text>
        <Text style={styles.successDescription}>
          Congratulations, you are in the game.{'\n'}We will send you a
          notification one {'\n'}hour before
        </Text>
        <MyButton
          style={styles.addPayment}
          iconLeft={
            <PlusIcon width={16} height={16} color={colors.lightBlue} />
          }
          iconLeftOffset={3}
          color={colors.lightGrey}
          fullWidth
          type="outline"
          onPress={() => {}}>
          <H3 color={colors.lightBlue}>Add to calendar</H3>
        </MyButton>
      </Vertical>
      <BottomContainer>
        <MyButton
          size="lg"
          gradientColors={colors.blueGradient}
          onPress={handleGoToGamesList}>
          Got it
        </MyButton>
      </BottomContainer>
    </MySafeAreaView>
  );
};

export default Success;
