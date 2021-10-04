// @ts-check

import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Vertical,
  MyButton,
  TextField,
  PasswordField,
  PhoneField,
  AuthBackgroundImage,
  H3,
} from '../../components/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import styles from './styles';
import validationSchema from './validation';
import { useHeaderHeight } from '@react-navigation/stack';
import { scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import { registerWithPhoneAndPassword } from '../../services/auth/registration';
import { convertToFormData } from '../../services/helper';
const Registration = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [phone, setPhone] = useState({
    isVerified: false,
  });

  return (
    <Vertical style={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          placeOfWork: '',
          workingPosition: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        validate={() => {
          const errors = {};
          if (!phone.isVerified) {
            errors.phone = 'Not valid';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          registerWithPhoneAndPassword(
            convertToFormData({ phone: values.phone }),
          )
            .then(response => {
              navigation.push('NumberConfirmation', { values });
            })
            .catch(error => {})
            .finally(() => setSubmitting(false));
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isSubmitting,
          touched,
          dirty,
        }) => (
          <AuthBackgroundImage>
            <ScrollView
              style={{ marginTop: scale(headerHeight) }}
              showsVerticalScrollIndicator={false}>
              <KeyboardAwareScrollView contentContainerStyle={styles.formView}>
                <TextField
                  variant="filled"
                  placeholder="Firstname"
                  onChangeText={handleChange('firstName')}
                  error={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  keyboard="default"
                />
                <TextField
                  variant="filled"
                  placeholder="Lastname"
                  error={errors.lastName && touched.lastName && errors.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  keyboard="default"
                />
                <TextField
                  variant="filled"
                  placeholder="Workplace"
                  error={
                    errors.placeOfWork &&
                    touched.placeOfWork &&
                    errors.placeOfWork
                  }
                  onChangeText={handleChange('placeOfWork')}
                  onBlur={handleBlur('placeOfWork')}
                  value={values.placeOfWork}
                  keyboard="default"
                />
                <TextField
                  variant="filled"
                  placeholder="Position"
                  error={
                    errors.workingPosition &&
                    touched.workingPosition &&
                    errors.workingPosition
                  }
                  onChangeText={handleChange('workingPosition')}
                  onBlur={handleBlur('workingPosition')}
                  value={values.workingPosition}
                  keyboard="default"
                />
                {/* <TextField
                  variant="filled"
                  placeholder="Email"
                  error={errors.email && touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboard="email-address"
                /> */}

                <PhoneField
                  variant="filled"
                  onBlur={handleBlur('phone')}
                  error={errors.phone && touched.phone && errors.phone}
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
                  clearable
                  placeholder="Password"
                />
                <PasswordField
                  variant="filled"
                  onChangeText={handleChange('confirmPassword')}
                  error={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                  value={values.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirm password"
                  onSubmitEditing={handleSubmit}
                />
                <MyButton
                  gradientColors={colors.blueGradient}
                  disabled={!dirty || isSubmitting}
                  size="lg"
                  style={styles.button}
                  onPress={handleSubmit}>
                  Create
                </MyButton>

                <H3 style={styles.privacyPolicy} color={colors.white}>
                  By reserving you agree{'\n'} to the Pinmate Privacy Police
                </H3>
              </KeyboardAwareScrollView>
            </ScrollView>
          </AuthBackgroundImage>
        )}
      </Formik>
    </Vertical>
  );
};

export default Registration;
