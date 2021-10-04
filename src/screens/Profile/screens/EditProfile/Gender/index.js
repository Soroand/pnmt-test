import React, { useRef } from 'react';
import { Text } from 'react-native';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { H3 } from '../../../../../components';
import ActionSheet from 'react-native-actionsheet';

const Gender = ({ gender, handleChange, setGender, setFieldValue }) => {
  const actionSheet = useRef(null);
  return (
    <>
      <TouchableOpacity
        style={styles.input}
        onPress={() => {
          actionSheet.current.show();
        }}>
        <Text style={[{ marginBottom: 3 }, styles.labelFocused]}>Gender</Text>
        <Text style={[styles.textProperties, { textTransform: 'capitalize' }]}>
          {gender === 0 ? 'Male' : 'Female'}
        </Text>
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheet}
        title={'Choose your gender'}
        options={['Male', 'Female', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={index => {
          if (index !== 2) {
            handleChange({ target: { name: 'gender', value: index } });
            setGender(index);
            setFieldValue('gender', index);
          }
        }}
      />
    </>
  );
};

export default Gender;
