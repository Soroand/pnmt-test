import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsOption from '../index';

const AboutMe = ({ route, navigation }) => {
  const aboutMe = useSelector(state => state.profileInfo.aboutMe);
  const handleChangeRoute = route => {
    navigation.push(route);
  };
  return (
    <SettingsOption
      name="About me"
      subtext={
        aboutMe?.length > 40
          ? aboutMe?.slice(0, 40) + '...'
          : aboutMe || 'no information'
      }
      onPress={() => handleChangeRoute('About')}
    />
  );
};

export default AboutMe;
