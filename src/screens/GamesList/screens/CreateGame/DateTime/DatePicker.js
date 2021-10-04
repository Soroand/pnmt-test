import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, Modal } from 'react-native';
import { Horizontal, BT } from '../../../../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from '../../../../../components/SvgIcons/Calendar/calendar';

const DatePicker = ({ date, setDate }) => {
  const [show, setShow] = useState(false);
  const [initialDate, setInitialDate] = useState(date);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    if (
      selectedDate.toISOString().slice(0, 10) >=
      initialDate.toISOString().slice(0, 10)
    ) {
      setDate(selectedDate || date);
    } else {
      alert('Selected date cannot be less than current');
    }
  };

  const closeCalendar = () => {
    setShow(false);
  };

  return (
    <>
      <BT style={{ marginTop: 25, marginBottom: 10 }} color="#838B97">
        Date
      </BT>

      <TouchableOpacity onPress={() => setShow(!show)} style={styles.datePick}>
        <View>
          <Horizontal>
            <CalendarIcon style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 16 }}>
              {date?.toString().slice(0, 10)}
            </Text>
          </Horizontal>
        </View>
      </TouchableOpacity>

      {Platform.OS === 'ios'
        ? show && (
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
              <TouchableOpacity onPress={() => closeCalendar()}>
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
        : show && (
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

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    zIndex: 100,
  },
  modalContent: {
    top: '25%',
    height: '25%',
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
  },
  datePick: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 45,
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
});

export default DatePicker;
