import React from 'react';
import SettingsOption from '../index';
import { useSelector } from 'react-redux';

const Interests = ({ route, navigation }) => {
  const handleChangeRoute = route => {
    navigation.push(route);
  };
  const { myInterests } = useSelector(state => state.profileInfo);

  return (
    <SettingsOption
      name="Interests"
      indicators={myInterests?.length || 0}
      isLabel={true}
      onPress={() => handleChangeRoute('Interests')}
    />
  );
};

export default Interests;
