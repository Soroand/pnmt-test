/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CancelBtn from '../SvgIcons/Tutorial/CancelBtn';
import { getMyProfileComplete } from 'store/tutorial/tutorial.action';

const StepOne = ({
  setTutorialStep,
  tutorialStep,
  stop,
  handleNext,
  currentStep,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {/* ----- TOP PART ----- */}

        <View style={styles.topPart}>
          <Image
            style={{ zIndex: 5, position: 'absolute' }}
            source={require('../../assets/images/WelcomeTutorial.png')}
          />
          <Image
            style={{ zIndex: 10, position: 'absolute' }}
            source={require('../../assets/images/TutorialLogo.png')}
          />
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              stop();
              dispatch(getMyProfileComplete(false));
            }}>
            <CancelBtn />
          </TouchableOpacity>
        </View>
        {/* ---------- BOTTOM PART ---------- */}

        <View style={styles.bottomPart}>
          <Text style={styles.title}>Welcome to Pinmate</Text>
          <Text style={styles.description}>
            Ready to start playing? Watch a short tutorial on how to create and
            join games.
          </Text>
          <View style={styles.btnContainer}>
            <Text style={styles.stepCount}>{tutorialStep} of 4</Text>
            <TouchableOpacity
              style={styles.proceedButton}
              onPress={() => {
                setTutorialStep(tutorialStep + 1);
                handleNext();
              }}>
              <View>
                <Text style={{ color: 'white' }}>Start tutorial</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 325,
    height: 380,
    alignSelf: 'center',
    borderRadius: 10,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  topPart: {
    width: '100%',
    height: '50%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomPart: {
    width: '100%',
    height: '50%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#344154',
    marginTop: 10,
  },
  description: {
    marginTop: 7,
    fontSize: 15,
    color: '#838B97',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 25,
  },
  stepCount: {
    color: '#838B97',
    fontSize: 14,
    marginRight: 10,
  },
  proceedButton: {
    width: 130,
    height: 35,
    backgroundColor: '#515BF1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  cancel: {
    elevation: 15,
    position: 'absolute',
    zIndex: 15,
    top: 5,
    right: 10,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepOne;
