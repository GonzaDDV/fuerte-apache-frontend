import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {width, moderateScale, height} from '../../functions/ResponsiveFontSize';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ErrorMessage = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const errorTrue = props.error.error === true;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (errorTrue) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [errorTrue]);

  return (
    <Animated.View
      style={[
        styles.errorContainer,
        {opacity: fadeAnim, display: errorTrue ? 'flex' : 'none'},
      ]}>
      <MaterialIcons
        name="highlight-off"
        style={styles.errorIcon}
        size={moderateScale(30)}
        color="#fff"
      />
      <Text style={styles.errorMessage}>
        Hubo un error. Por favor, revise que sus datos sean correctos
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#e9545c',
    marginHorizontal: width * 0.075,
    marginBottom: 12,
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(10),
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorIcon: {marginRight: moderateScale(10)},
  errorMessage: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    flex: 1,
  },
});
export default ErrorMessage;
