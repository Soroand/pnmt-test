// @ts-check

import React from 'react';
import { View } from 'react-native';
import {
  MyButton,
  PhoneField,
  Vertical,
  MySafeAreaView,
  Horizontal,
  H1,
  H2,
  H4,
} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import styles from './styles';
import colors from '../../constants/colors';
import { forgotPasswordStepOne } from '../../services/auth/forgotPassword';
import { convertToFormData } from '../../services/helper';

const ForgetPassword = ({ navigation }) => {
  const handleGoToLogin = () => {
    navigation.goBack();
  };
  return (
    <MySafeAreaView>
      <Vertical style={styles.container}>
        <Formik
          initialValues={{ phone: '' }}
          onSubmit={(values, { setErrors, setSubmitting }) => {
            forgotPasswordStepOne(convertToFormData(values))
              .then(response => {
                navigation.push('ConfirmCode', { phone: values.phone });
              })
              .catch(error => {
                setErrors({ phone: error.response.data.message });
              })
              .finally(() => setSubmitting(false));
          }}>
          {({ handleChange, handleSubmit, errors, touched, isSubmitting }) => (
            <KeyboardAwareScrollView contentContainerStyle={styles.formView}>
              <H1 style={styles.title} color={colors.customBlack}>
                Forgot your password?
              </H1>

              <H2 style={styles.description} color={colors.customBlack}>
                We will send a message with a code to the number entered during
                the registration:
              </H2>
              <View style={styles.inputView}>
                <PhoneField
                  variant="filled"
                  containerStyle={styles.input}
                  error={errors.phone && touched.phone && errors.phone}
                  onChangeText={phone => {
                    handleChange({
                      target: {
                        value: `${phone.dialCode}${phone.unmaskedPhoneNumber}`,
                        name: 'phone',
                      },
                    });
                  }}
                />
              </View>

              <MyButton
                disabled={isSubmitting}
                gradientColors={colors.blueGradient}
                size="lg"
                style={styles.button}
                onPress={handleSubmit}>
                Send
              </MyButton>
              <Horizontal style={styles.rememberPasswordContainer}>
                <H4>Remember password? </H4>
                <MyButton
                  style={styles.rememberPassword}
                  color={colors.lightBlue}
                  type="link"
                  onPress={handleGoToLogin}
                  textWrapper={H4}>
                  Log in
                </MyButton>
              </Horizontal>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </Vertical>
    </MySafeAreaView>
  );
};

export default ForgetPassword;
