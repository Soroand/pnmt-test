import React, { useState } from 'react';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthDate = ({ birthDate, birth, setFieldValue, date, setDate }) => {
  const [showDate, setShowDate] = useState(false);
  const [unformattedDate, setUnformattedDate] = useState(birthDate);

  const onChange = (event, selectedDate) => {
    setShowDate(Platform.OS === 'ios');
    setDate((selectedDate && selectedDate) || date);
    setUnformattedDate(
      (selectedDate && selectedDate.toISOString().slice(0, 10)) ||
        unformattedDate,
    );
  };

  const closeCalendar = () => {
    setShowDate(!showDate);
  };
  return (
    <>
      <TouchableOpacity style={[styles.input]} onPress={() => closeCalendar()}>
        <Text
          style={[
            styles.birthDate,
            birth !== '' && styles.labelFocusedBirthDate,
          ]}>
          Birth Date
        </Text>

        <Text style={styles.textProperties}>{unformattedDate}</Text>
      </TouchableOpacity>
      {Platform.OS === 'ios'
        ? showDate && (
            <>
              <TouchableOpacity>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  closeCalendar();
                  setFieldValue('birth', date);
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#515BF1',
                    alignSelf: 'center',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </>
          )
        : showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
    </>
  );
};

export default BirthDate;
