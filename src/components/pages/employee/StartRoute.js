import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {moderateScale, height} from '../../../functions/ResponsiveFontSize';

const StartRoute = ({nextStep}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
    }).start(nextStep);
  };

  useEffect(() => {
    fadeIn();
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
    fontFamily: 'Nunito-Regular',
  },
});

export default StartRoute;
