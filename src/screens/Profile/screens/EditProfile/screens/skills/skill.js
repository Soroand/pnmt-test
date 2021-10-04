import React from 'react';
import SettingsOption from '../index';
import { useSelector } from 'react-redux';

const Skills = ({ route, navigation }) => {
  const handleChangeRoute = route => {
    navigation.push(route);
  };
  const skills = useSelector(state => state.profileInfo.skills);

  return (
    <SettingsOption
      name="Skills"
      isLabel={true}
      indicators={skills?.length || 0}
      onPress={() => {
        handleChangeRoute('Skills');
      }}
    />
  );
};

export default Skills;
