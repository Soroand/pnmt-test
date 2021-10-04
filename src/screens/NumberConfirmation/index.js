// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import {
  Vertical,
  MyButton,
  PasswordField,
  AuthBackgroundImage,
  H1,
  H2,
  H3,
} from '../../components/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import styles from './styles';
import colors from '../../constants/colors';
import { confirmPhoneNumber } from '../../services/auth/registration';
import { convertToFormData } from '../../services/helper';
import { confirmNumberComplete } from '../../store/auth/auth.action';

const NumberConfirmation = ({ navigation, route, confirmNumberComplete }) => {
  const handleResendCode = () => {};
  return (
    <Vertical style={styles.container}>
      <Formik
        initialValues={{ code: '' }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          confirmPhoneNumber(
            convertToFormData({ ...route.params.values, ...values }),
          )
            .then(response => {
              confirmNumberComplete(response.data.data);
              navigation.navigate('BottomTabs');
            })
            .catch(error => {
              let errors = error.response.data.data;
              setErrors(errors);
            })
            .finally(() => setSubmitting(false));
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
        }) => (
          <AuthBackgroundImage>
            <KeyboardAwareScrollView contentContainerStyle={styles.formView}>
              <H1 style={styles.title} color={colors.white}>
                Confirm the number
              </H1>
              <H2 style={styles.description} color={colors.white}>
                A text message with code was sent to your phone
              </H2>
              <PasswordField
                variant="filled"
                error={errors.code && touched.code && errors.code}
                onChangeText={handleChange('code')}
                value={values.code}
                onBlur={handleBlur('code')}
                placeholder="Code"
                onSubmitEditing={handleSubmit}
              />

              <MyButton
                gradientColors={colors.blueGradient}
                size="lg"
                disabled={isSubmitting}
                style={styles.button}
                onPress={handleSubmit}>
                Confirm
              </MyButton>
              <MyButton
                style={styles.resendCode}
                color={colors.white}
                type="link"
                textWrapper={H3}
                onPress={handleResendCode}>
                Resend code
              </MyButton>
            </KeyboardAwareScrollView>
          </AuthBackgroundImage>
        )}
      </Formik>
    </Vertical>
  );
};

export default connect(
  null,
  { confirmNumberComplete },
)(NumberConfirmation);
