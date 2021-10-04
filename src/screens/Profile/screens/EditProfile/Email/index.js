import React from 'react';
import { TextField } from '../../../../../components';
import styles from '../styles';
const Email = ({ value, handleChange }) => {
  return (
    <TextField
      custom={true}
      keyboard="email-address"
      variant="default"
      label="E-mail"
      inputStyle={{ fontWeight: '400', padding: 0, margin: 0 }}
      labelStyle={{ color: '#D4D4D4' }}
      style={styles.textFieldContainer}
      value={value}
      onChangeText={handleChange('email')}
    />
  );
};

export default Email;
