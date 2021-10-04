import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BT } from '../../../../../components/Typography';
import { Horizontal } from '../../../../../components/FlexDirections';

const TimeRadio = ({ time, setTime, date }) => {
  const timeCheck = new Date().getHours();
  const dateCheck = new Date();

  return (
    <>
      <BT style={{ marginTop: 25, marginBottom: 10 }} color="#838B97">
        Time
      </BT>

      <TouchableOpacity onPress={() => setTime(1)}>
        <Horizontal style={{ marginBottom: 15 }}>
          <View
            style={
              time !== 1
                ? [styles.radioButton]
                : [styles.radioButton, styles.radioButtonActive]
            }
          />
          <BT
            style={
              time !== 1
                ? [styles.text, { marginLeft: 10 }]
                : [styles.textActive, { marginLeft: 10 }]
            }>
            Any
          </BT>
        </Horizontal>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (date > dateCheck) {
            setTime(2);
          } else if (timeCheck < 13) {
            setTime(2);
          } else {
            alert('Your current time is already ahead of the game');
          }
        }}>
        <Horizontal style={{ marginBottom: 15 }}>
          <View
            style={
              time !== 2
                ? [styles.radioButton]
                : [styles.radioButton, styles.radioButtonActive]
            }
          />
          <BT
            style={
              time !== 2
                ? [styles.text, { marginLeft: 10 }]
                : [styles.textActive, { marginLeft: 10 }]
            }>
            Morning, 7:00-13:00
          </BT>
        </Horizontal>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (date > dateCheck) {
            setTime(3);
          } else if (timeCheck < 21) {
            setTime(3);
          } else {
            alert('Your current time is already ahead of the game');
          }
        }}>
        <Horizontal style={{ marginBottom: 15 }}>
          <View
            style={
              time !== 3
                ? [styles.radioButton]
                : [styles.radioButton, styles.radioButtonActive]
            }
          />
          <BT
            style={
              time !== 3
                ? [styles.text, { marginLeft: 10 }]
                : [styles.textActive, { marginLeft: 10 }]
            }>
            Afternoon, 13:00-21:00
          </BT>
        </Horizontal>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  datePick: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 45,
    borderWidth: 1,
    borderColor: '#D4D4D4',
  },
  text: {
    color: '#344154',
  },
  textActive: {
    color: '#515BF1',
    fontSize: 16,
  },
  radioButtonActive: {
    borderColor: '#515BF1',
    borderWidth: 3,
  },
  radioButton: {
    color: '#344154',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#344154',
    width: 20,
    height: 20,
  },
});

export default TimeRadio;
