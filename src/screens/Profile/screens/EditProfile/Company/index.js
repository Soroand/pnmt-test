import React from 'react';
import { TextField } from '../../../../../components';
import styles from '../styles';

const Company = ({ value, handleChange }) => {
  return (
    <TextField
      custom={true}
      variant="default"
      label="Company name"
      inputStyle={{ fontWeight: '400', padding: 0, margin: 0 }}
      labelStyle={{ color: '#D4D4D4' }}
      style={styles.textFieldContainer}
      value={value}
      onChangeText={handleChange('company')}
    />
  );
};

export default Company;
