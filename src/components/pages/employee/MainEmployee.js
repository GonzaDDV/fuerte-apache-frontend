import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import MapBackground from '../../../assets/images/map-background.png';
import SelectType from './SelectType';
import StartRoute from './StartRoute';
import Route from './Route';

const MainEmployee = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = {
    0: <SelectType nextStep={nextStep} />,
    1: <StartRoute nextStep={nextStep} />,
    2: <Route goToStep={setCurrentStep} />,
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={MapBackground} style={styles.background}>
        {steps[currentStep]}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
  },
  background: {
    width,
    height,
  },
});

export default MainEmployee;
