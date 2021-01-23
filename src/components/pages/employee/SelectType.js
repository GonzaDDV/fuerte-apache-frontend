import React, {useState, useRef} from 'react';
import {View, Easing, Text, StyleSheet, Animated} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import SelectTypeButtons from '../citizen/SelectType';

const SelectType = ({nextStep}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [height, setHeight] = useState(0);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => nextStep());
  };

  const interpolation = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  return (
    <Animated.View
      onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
      style={[styles.bottomMenu, {transform: [{translateY: interpolation}]}]}>
      <Text style={styles.title}>Elige tu recorrido</Text>
      <View style={styles.buttonsContainer}>
        <SelectTypeButtons nextStep={fadeOut} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width,
    paddingVertical: height * 0.05,
    position: 'absolute',
    bottom: 20,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    color: '#65B98F',
    marginBottom: moderateScale(20),
  },
});

export default SelectType;
