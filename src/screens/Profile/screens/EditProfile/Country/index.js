import React from 'react';
import styles from '../styles';
import { TextField } from '../../../../../components';

const Country = ({ country, handleChange }) => {
  return (
    <TextField
      style={styles.textFieldContainer}
      keyboard="default"
      variant="default"
      label="Country"
      value={country}
      onChangeText={handleChange('country')}
    />
  );
};

export default Country;
