/* eslint-disable react-native/no-inline-styles */
// @ts-check
import React, { useState } from 'react';
import {
  MySafeAreaView,
  Vertical,
  H2,
  BT,
  Horizontal,
  H3,
  Divider,
  TextArea,
  BottomContainer,
  MyButton,
  H4,
  ST,
  Loader,
} from '../../../../components';
import styles from './styles';
import colors from '../../../../constants/colors';
import {
  KeyboardArrowRightIcon,
  AwfulIcon,
  BadIcon,
  NeutralIcon,
  GoodIcon,
  AwsomeIcon,
} from '../../../../components/SvgIcons';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Formik } from 'formik';
import {
  KeyboardAvoidingView,
  View,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import { convertToFormData } from '../../../../services/helper';
import MainButton from '../../../../components/MyButton/MainGameButton';
import { sendFeedback } from '../../../../services/feedback/feedback';

const Feedback = ({ navigation }) => {
  const [problem, setProblem] = useState('');
  const [emotion, setEmotion] = useState('2');
  const [loading, setLoading] = useState(false);

  const onFormSubmit = values => {
    values.rating = (parseInt(emotion) + 1).toString();
    values.message = problem;

    sendFeedback(values)
      .then(response => {
        if (response.data.success) {
          alert('Thank you for your feedback!');
          navigation.goBack();
        }
      })
      .catch(error => {
        alert('Something went wrong!', error);
        setLoading(false);
      });
  };

  return loading ? (
    <Vertical alignCenter justifyCenter style={{ height: '90%' }}>
      <Loader />
    </Vertical>
  ) : (
    <Formik
      initialValues={{ rating: emotion, message: problem }}
      onSubmit={values => onFormSubmit(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return (
          // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Vertical
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'space-between',
                borderBottomWidth: 5,
                padding: 25,
              }}>
              <TouchableWithoutFeedback
                style={{ height: '100%', width: '100%' }}
                onPress={() => Keyboard.dismiss()}>
                <H2 style={styles.emotionTitle}>How do you rate our app?</H2>
                <Horizontal spaceBetween style={styles.emotionContainer}>
                  <TouchableOpacity onPress={() => setEmotion('0')}>
                    <Vertical alignCenter>
                      <AwfulIcon
                        width={36}
                        height={36}
                        color={
                          emotion === '0'
                            ? colors.lightBlue
                            : colors.customBlack
                        }
                      />
                      <H4 style={styles.iconLabel} color={colors.lightBlue}>
                        {emotion === '0' && 'Awful'}
                      </H4>
                    </Vertical>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEmotion('1')}>
                    <Vertical alignCenter>
                      <BadIcon
                        width={36}
                        height={36}
                        color={
                          emotion === '1'
                            ? colors.lightBlue
                            : colors.customBlack
                        }
                      />
                      <H4 style={styles.iconLabel} color={colors.lightBlue}>
                        {emotion === '1' && 'Bad'}
                      </H4>
                    </Vertical>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEmotion('2')}>
                    <Vertical alignCenter>
                      <NeutralIcon
                        width={36}
                        height={36}
                        color={
                          emotion === '2'
                            ? colors.lightBlue
                            : colors.customBlack
                        }
                      />
                      <H4 style={styles.iconLabel} color={colors.lightBlue}>
                        {emotion === '2' && 'Neutral'}
                      </H4>
                    </Vertical>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEmotion('3')}>
                    <Vertical alignCenter>
                      <GoodIcon
                        width={36}
                        height={36}
                        color={
                          emotion === '3'
                            ? colors.lightBlue
                            : colors.customBlack
                        }
                      />
                      <H4 style={styles.iconLabel} color={colors.lightBlue}>
                        {emotion === '3' && 'Good'}
                      </H4>
                    </Vertical>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setEmotion('4')}>
                    <Vertical alignCenter>
                      <AwsomeIcon
                        width={36}
                        height={36}
                        color={
                          emotion === '4'
                            ? colors.lightBlue
                            : colors.customBlack
                        }
                      />
                      <H4 style={styles.iconLabel} color={colors.lightBlue}>
                        {emotion === '4' && 'Awsome'}
                      </H4>
                    </Vertical>
                  </TouchableOpacity>
                </Horizontal>

                <Divider />

                <Vertical>
                  <BT style={styles.label} color={colors.customBlack}>
                    Add a comment
                  </BT>
                  <TextArea
                    placeholder="Write 2 or 3 lines"
                    value={problem}
                    onChangeText={text => setProblem(text)}
                  />
                </Vertical>
              </TouchableWithoutFeedback>
            </Vertical>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                left: 0,
              }}>
              <BottomContainer>
                <MainButton
                  deActivation={true}
                  size={40}
                  fontSize={20}
                  color="white"
                  press={() => handleSubmit()}
                  title="Send feedback"
                />
              </BottomContainer>
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default Feedback;
