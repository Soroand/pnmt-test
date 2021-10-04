import React from 'react';
import { PasswordField } from '../../../../../components';

const ConfirmPassword = ({ confirmPassword, handleChange }) => {
  return (
    <PasswordField
      custom={true}
      label="Confirm Password"
      variant="default"
      value={confirmPassword}
      onChangeText={handleChange('confirmPassword')}
    />
  );
};

export default ConfirmPassword;
