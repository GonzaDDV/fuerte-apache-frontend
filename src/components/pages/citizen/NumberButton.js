import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

const NumberButton = (props) => {
  const {number, setSelectedNumber, selectedNumber} = props;
  const isSelected = number === selectedNumber;

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const colorInterpolation = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,255,255)', 'rgb(101,185,143)'],
  });

  useEffect(() => {
    isSelected ? fadeIn() : fadeOut();
  }, [isSelected]);

  return (
    <TouchableWithoutFeedback onPress={() => setSelectedNumber(number)}>
      <Animated.View
        style={[
          styles.button,
          isSelected && {
            backgroundColor: colorInterpolation,
          },
        ]}>
        <Text style={[styles.buttonText, isSelected && styles.selectedText]}>
          {number || '+'}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#65B98F',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#65B98F',
    fontSize: moderateScale(20),
    fontFamily: 'Nunito-Regular',
  },
  selected: {},
  selectedText: {
    color: '#fff',
  },
});

export default NumberButton;
