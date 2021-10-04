import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import DatePicker from './DatePicker';
import TimeRadio from './TimeRadio';
import styles from '../styles';

const DateTime = ({ setDateTime }) => {
  const [date, setDate] = useState(
    new Date(new Date().setDate(new Date().getDate())),
  );
  const [time, setTime] = useState(1);

  const timeList = {
    1: '23:59:59',
    2: '13:00:00',
    3: '21:00:00',
  };

  useEffect(() => {
    setDateTime(`${date.toISOString().slice(0, 10)} ${timeList[time]}`);
  }, [date, time]);

  return (
    <View style={styles.containerPadding}>
      <DatePicker mode={date} date={date} setDate={setDate} />
      <TimeRadio time={time} setTime={setTime} date={date} />
    </View>
  );
};

export default DateTime;
