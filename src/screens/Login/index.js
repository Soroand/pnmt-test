// @ts-check

import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  H1,
  H3,
  Vertical,
  MyButton,
  PasswordField,
  PhoneField,
  AuthBackgroundImage,
} from '../../components/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Formik } from 'formik';
import colors from '../../constants/colors';
import styles from './styles';
import { loginWithPhoneAndPassword } from '../../services/auth/login';
import { loginComplete } from '../../store/auth/auth.action';
import { convertToFormData } from '../../services/helper';

const Login = ({ navigation, loginComplete }) => {
  const handleGoToGames = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTabs' }],
    });
  };

  const [phone, setPhone] = useState({
    isVerified: false,
  });

  const handleGoToFotgetPassword = () => {
    navigation.push('ForgetPassword');
  };
  const handleGoToFotgetPasswordEmail = () => {
    navigation.push('ForgetPasswordEmail');
  };

  return (
    <Vertical style={styles.container}>
      <Formik
        initialValues={{ phone: '', password: '' }}
        validateOnBlur
        validate={() => {
          const errors = {};
          if (!phone.isVerified) {
            errors.phone = 'Not valid';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          loginWithPhoneAndPassword(convertToFormData(values))
            .then(response => {
              loginComplete(response.data.data);
              handleGoToGames();
            })
            .catch(error => {
              let errors = error.response.data.data;
              setErrors(errors);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <AuthBackgroundImage>
            <KeyboardAwareScrollView contentContainerStyle={styles.formView}>
              <H1 style={styles.loginTitle} color={colors.white}>
                Let's get started
              </H1>
              <PhoneField
                variant="filled"
                error={errors.phone && touched.phone && errors.phone}
                onBlur={handleBlur('phone')}
                onChangeText={phone => {
                  setPhone(phone);
                  handleChange({
                    target: {
                      value: `${phone.dialCode}${phone.unmaskedPhoneNumber}`,
                      name: 'phone',
                    },
                  });
                }}
              />
              <PasswordField
                variant="filled"
                onChangeText={handleChange('password')}
                error={errors.password && touched.password && errors.password}
                value={values.password}
                onBlur={handleBlur('password')}
                showPassword
                placeholder="Password"
                onSubmitEditing={handleSubmit}
              />
              <MyButton
                gradientColors={colors.blueGradient}
                size="lg"
                disabled={isSubmitting}
                style={styles.button}
                onPress={handleSubmit}>
                Sign in
              </MyButton>
              <MyButton
                style={styles.forgetPassword}
                color={colors.white}
                type="link"
                textWrapper={H3}
                onPress={handleGoToFotgetPassword}>
                Forgot details?
              </MyButton>
              {/* <MyButton
                style={styles.forgetPassword}
                color={colors.white}
                type="link"
                textWrapper={H3}
                onPress={handleGoToFotgetPasswordEmail}>
                Forgot details Email?
              </MyButton> */}
            </KeyboardAwareScrollView>
          </AuthBackgroundImage>
        )}
      </Formik>
    </Vertical>
  );
};

export default connect(
  null,
  { loginComplete },
)(Login);
