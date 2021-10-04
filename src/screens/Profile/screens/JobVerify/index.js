// @ts-check

import React from 'react';
import {
  Vertical,
  MySafeAreaView,
  H4,
  TextField,
  BottomContainer,
  MyButton,
} from '../../../../components';
import styles from './styles';
import { Formik } from 'formik';
import colors from '../../../../constants/colors';

const JobVerify = ({ navigation }) => {
  return (
    <MySafeAreaView>
      <Formik
        initialValues={{
          workplace: '',
          businessArea: '',
          legalAddress: '',
          email: '',
          file: '',
        }}
        onSubmit={values => {
          console.log(values);
          // navigation.navigate('');
        }}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Vertical style={styles.container}>
              <H4 style={styles.description}>
                Pinmate tries to establish business{'\n'}communications among
                players.
                {'\n'}
                For this purpose, it is important for us{'\n'}to confirm your
                place of work.
              </H4>
              <TextField
                onChangeText={handleChange('workplace')}
                value={values.workplace}
                label="Place of work"
                variant="default"
                keyboard="default"
              />
              <TextField
                onChangeText={handleChange('businessArea')}
                value={values.businessArea}
                label="Business area"
                variant="default"
                keyboard="default"
              />
              <TextField
                onChangeText={handleChange('legalAddress')}
                value={values.legalAddress}
                label="Legal address"
                variant="default"
                keyboard="default"
              />
              <TextField
                onChangeText={handleChange('email')}
                value={values.email}
                label="Email address"
                variant="default"
                keyboard="email-address"
              />
              {/* TODO: add image choose */}

              <H4 style={styles.photoDescription}>
                We require a government-issued photo ID{'\n'}that shows your
                name and date of birth (e.g.{'\n'}driver's license, passport or
                national identity card).
              </H4>
            </Vertical>
            <BottomContainer>
              <MyButton
                gradientColors={colors.blueGradient}
                size="lg"
                onPress={handleSubmit}>
                Send request
              </MyButton>
            </BottomContainer>
          </>
        )}
      </Formik>
    </MySafeAreaView>
  );
};

export default JobVerify;
