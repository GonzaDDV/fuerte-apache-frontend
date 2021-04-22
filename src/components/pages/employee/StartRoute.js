import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {moderateScale, height} from '../../../functions/ResponsiveFontSize';
import Route from './Route';
import {useStoreActions} from 'easy-peasy';
import Popup from '../../global/Popup';

const StartRouteComponent = ({nextStep}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const setRouteStarted = useStoreActions((actions) => actions.setRouteStarted);

  const startRoute = () => {
    setRouteStarted(true);
    nextStep();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(startRoute);
  };

  useEffect(() => {
    fadeIn();
    setRouteStarted(false);
  }, []);

  return (
    <Animated.View style={[styles.mainContainer, {opacity: fadeAnim}]}>
      <TouchableWithoutFeedback onPress={fadeOut}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar recorrido</Text>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const StartRoute = ({navigation}) => {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const nextStep = () => setStep((prev) => ++prev);
  const goToStep = (step) => setStep(step);

  const steps = [
    <StartRouteComponent nextStep={nextStep} />,
    <Route
      finish={() => {
        setSuccess(true);
      }}
    />,
  ];

  return (
    <>
      {success && (
        <Popup
          text="¡Los residuos fueron recolectados correctamente!"
          close={() => navigation.navigate('Home')}
        />
      )}
      {steps[step]}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: height * 0.085,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#65B98F',
    paddingHorizontal: moderateScale(60),
    paddingVertical: moderateScale(12),
    borderRadius: 18,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(20),
    
  },
});

export default StartRoute;
