// @ts-check

import React, { createRef } from 'react';
import {
  MySafeAreaView,
  Vertical,
  H1,
  H2,
  MyButton,
  Horizontal,
  H4,
} from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';
import colors from '../../constants/colors';
import { TextInput } from 'react-native-gesture-handler';
import { forgotPasswordStepTwo } from '../../services/auth/forgotPassword';
import { convertToFormData } from '../../services/helper';
import uuid from 'react-native-uuid';

const ConfirmCode = ({ navigation, route }) => {
  const inputRefs = [createRef(), createRef(), createRef(), createRef()];

  const goNextAfterEdit = index => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].focus();
    }
  };
  return (
    <MySafeAreaView>
      <Vertical style={styles.container}>
        <Formik
          initialValues={{
            1: '',
            2: '',
            3: '',
            4: '',
          }}
          onSubmit={values => {
            forgotPasswordStepTwo(
              convertToFormData({
                phone: route.params.phone,
                code: values[1] + values[2] + values[3] + values[4],
              }),
            )
              .then(response => {
                navigation.push('ConfirmCodeSuccess');
              })
              .catch(error => {
                console.log(error.response);
              });
          }}>
          {({ handleChange, handleSubmit, values }) => (
            <KeyboardAwareScrollView contentContainerStyle={styles.formView}>
              <H1 style={styles.title} color={colors.customBlack}>
                Enter 4-digt recovery code
              </H1>

              <H2 style={styles.description} color={colors.customBlack}>
                The recovery code was sent to your mobile number. Please enter
                the code:
              </H2>
              <View style={styles.inputView}>
                <Horizontal spaceBetween>
                  {inputRefs.map((item, index) => (
                    <TextInput
                      key={uuid.v4()}
                      value={values[index + 1]}
                      onChangeText={digit => {
                        handleChange({
                          target: { name: index + 1, value: digit },
                        });
                        if (index === 3) {
                          handleSubmit();
                        }
                      }}
                      onChange={() => goNextAfterEdit(index)}
                      ref={r => (inputRefs[index] = r)}
                      maxLength={1}
                      keyboardType="decimal-pad"
                      style={styles.codeInput}
                    />
                  ))}
                </Horizontal>
              </View>

              <Horizontal style={styles.rememberPasswordContainer}>
                <MyButton
                  style={styles.rememberPassword}
                  color={colors.lightBlue}
                  type="link"
                  textWrapper={H4}
                  onPress={() => {}}>
                  Resend code
                </MyButton>
              </Horizontal>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </Vertical>
    </MySafeAreaView>
  );
};

export default ConfirmCode;
