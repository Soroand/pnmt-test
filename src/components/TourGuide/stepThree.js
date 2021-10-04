/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Arrow from '../SvgIcons/TutorialArrow/topArrow';

const StepTwo = ({ tutorialStep, setTutorialStep, handleNext }) => {
  return (
    <>
      <View
        style={{
          width: 325,
          height: 135,
          backgroundColor: 'rgba(255,255,255, 1)',
          borderRadius: 15,
        }}>
        <Arrow style={{ position: 'absolute', top: -8, left: 25 }} />
        <Text
          style={{
            color: '#344154',
            fontSize: 16,
            marginLeft: 15,
            paddingVertical: 12.5,
            paddingHorizontal: 5,
            marginTop: 10,
            width: '90%',
            lineHeight: 20,
          }}>
          If You want to join the game, You can filter games by location.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 25,
          }}>
          <Text style={{ color: '#838B97', fontSize: 14, marginRight: 10 }}>
            {tutorialStep} of 4
          </Text>
          <TouchableOpacity
            style={{
              width: 130,
              height: 35,
              backgroundColor: '#515BF1',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}
            onPress={() => {
              setTutorialStep(tutorialStep + 1);
              handleNext();
            }}>
            <View>
              <Text style={{ color: 'white' }}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StepTwo;
