// @ts-check

import React from 'react';
import { View } from 'react-native';
import {
  MyButton,
  Horizontal,
  Vertical,
  AuthBackgroundImage,
  H1,
  H2,
} from '../../components/';
import styles from './styles';
import colors from '../../constants/colors';
import { FacebookIcon } from '../../components/SvgIcons';
const Intro = ({ navigation }) => {
  const HandleGoToSignUp = () => {
    navigation.navigate('Auth', { screen: 'Registration' });
  };
  const HandleGoTosignInWithFacebook = () => {};
  const HandleGoToLogin = () => {
    navigation.navigate('Auth', { screen: 'Login' });
  };

  return (
    <Vertical style={styles.container}>
      <AuthBackgroundImage style={styles.image}>
        <H1 style={styles.introTitle} color={colors.white}>
          Please create an account or log in to view your games
        </H1>
        <MyButton
          size="lg"
          gradientColors={colors.greenGradient}
          colorOnPressed="#2F8040"
          style={styles.button}
          onPress={HandleGoToSignUp}>
          Create an account
        </MyButton>

        {/* <MyButton
          iconLeft={
            <FacebookIcon width={10} height={22} color={colors.white} />
          }
          size="lg"
          color={colors.facebookColor}
          type="nonGradient"
          style={styles.button}
          onPress={HandleGoTosignInWithFacebook}>
          Sign in with Facebook
        </MyButton> */}
        <Horizontal spaceBetween style={styles.button}>
          <View style={styles.divider} />
          <H2 style={styles.dividerText} color={colors.white}>
            or
          </H2>
          <View style={styles.divider} />
        </Horizontal>
        <MyButton
          type="outline"
          color={colors.white}
          size="lg"
          onPress={HandleGoToLogin}>
          Log in
        </MyButton>
      </AuthBackgroundImage>
    </Vertical>
  );
};

export default Intro;
