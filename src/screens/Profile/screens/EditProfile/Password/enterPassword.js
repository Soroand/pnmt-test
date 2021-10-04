import React from 'react';
import { PasswordField } from '../../../../../components';

const EnterPassword = ({ password, handleChange }) => {
  return (
    <PasswordField
      custom={true}
      label="Password"
      variant="default"
      value={password}
      onChangeText={handleChange('password')}
    />
  );
};

export default EnterPassword;
