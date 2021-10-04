import React from 'react';
import SettingsOption from '../index';
import { useSelector } from 'react-redux';

const Language = ({ route, navigation }) => {
  const handleChangeRoute = (route, params) => {
    navigation.push(route, params);
  };
  const languages = useSelector(state => state.profileInfo.languages);

  return (
    <SettingsOption
      name="Languages"
      indicators={languages?.length || 0}
      isLabel={true}
      onPress={() => handleChangeRoute('Languages')}
    />
  );
};

export default Language;
