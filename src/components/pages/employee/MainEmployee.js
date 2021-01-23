import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import Map from '../../global/Map';

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
      <Map />
      <View>{steps[currentStep]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
  },
});

export default MainEmployee;
