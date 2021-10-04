/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import {
  useTourGuideController, // hook to start, etc.
} from 'rn-tourguide';

export const CustomWindow = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
}) => {
  const [tutorialStep, setTutorialStep] = useState(1);
  const { stop } = useTourGuideController();

  if (tutorialStep === 1) {
    return (
      <StepOne
        stop={stop}
        setTutorialStep={setTutorialStep}
        tutorialStep={tutorialStep}
        handleNext={handleNext}
        currentStep={currentStep}
      />
    );
  }
  if (tutorialStep === 2) {
    return (
      <StepTwo
        setTutorialStep={setTutorialStep}
        tutorialStep={tutorialStep}
        handleNext={handleNext}
        currentStep={currentStep}
      />
    );
  }
  if (tutorialStep === 3) {
    return (
      <StepThree
        setTutorialStep={setTutorialStep}
        tutorialStep={tutorialStep}
        handleNext={handleNext}
      />
    );
  }
  if (tutorialStep === 4) {
    return (
      <StepFour
        setTutorialStep={setTutorialStep}
        tutorialStep={tutorialStep}
        stop={stop}
      />
    );
  }
};
