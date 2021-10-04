// @ts-check

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import {
  MySafeAreaView,
  Vertical,
  H4,
  H2,
  MyButton,
  Divider,
  Horizontal,
} from '../../../../components';
import Accordian from '../../../../components/Accordian';
import colors from '../../../../constants/colors';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { getFaq } from '../../../../services/faq/faq';
import uuid from 'react-native-uuid';

const Faq = ({ navigation }) => {
  const faq = useSelector(state => state.faq.faq);
  const dispatch = useDispatch();

  useEffect(() => {
    new getFaq(`/faq/`)
      .getFaque()
      .then(response => {
        let data = response.data.data;
        dispatch({ type: 'FAQ', payload: data });
      })
      .catch(error => {});
    return function cleanUp() {
      new getFaq(`/faq/`).getFaque();
    };
  }, []);
  return (
    <MySafeAreaView>
      <Vertical style={styles.container}>
        <H2>Here you can find answers to most common questions.</H2>
        <Divider />
      </Vertical>
      <ScrollView>
        {faq.map((item, index) => (
          <Accordian
            key={uuid.v4()}
            title={item.question}
            body={<H4 style={{ opacity: 0.9 }}>{item.answer}</H4>}
          />
        ))}
      </ScrollView>
    </MySafeAreaView>
  );
};

export default Faq;
