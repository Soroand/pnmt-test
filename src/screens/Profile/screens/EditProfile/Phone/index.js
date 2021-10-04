import React, { useState } from 'react';
import { PhoneField } from '../../../../../components';
import styles from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

const Phone = ({ phone, handleChange, setFieldValue }) => {
  const [showPhoneField, setShowPhoneField] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={!showPhoneField && styles.input}
        onPress={() => setShowPhoneField(true)}>
        {!showPhoneField && (
          <>
            <Text style={[styles.label, styles.labelFocused]}>Phone</Text>
            <Text style={styles.textProperties}>{phone}</Text>
          </>
        )}
      </TouchableOpacity>
      {showPhoneField && (
        <PhoneField
          custom={true}
          variant="default"
          phoneInputStyle={styles.textProperties}
          labelStyle={{ color: '#D4D4D4' }}
          label="Phone"
          style={[styles.textFieldContainer, styles.phoneContainer]}
          onChangeText={phone => {
            setFieldValue('phone', phone);
            handleChange({
              target: {
                value: `${phone.dialCode}${phone.unmaskedPhoneNumber}`,
                name: 'phone',
              },
            });
          }}
        />
      )}
    </>
  );
};

export default Phone;
