import React from 'react';
import { TextField } from '../../../../../components';
import styles from '../styles';
const Position = ({ value, handleChange }) => {
  return (
    <TextField
      custom={true}
      keyboard="email-address"
      variant="default"
      label="Position"
      inputStyle={{ fontWeight: '400', padding: 0, margin: 0 }}
      labelStyle={{ color: '#D4D4D4' }}
      style={styles.textFieldContainer}
      value={value}
      onChangeText={handleChange('position')}
    />
  );
};

export default Position;
