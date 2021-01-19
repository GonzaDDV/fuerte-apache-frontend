import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import Recycle from '../../../assets/images/recycle.png';
import Trash from '../../../assets/images/trash.png';
import BananaTrash from '../../../assets/images/trash-2.png';

const SelectType = ({nextStep}) => {
  const [selected, setSelected] = useState(-1);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const press = () => {
    Animated.timing(fadeAnim, {
      toValue: 1.1,
      duration: 90,
      useNativeDriver: true,
    }).start(() => {
      nextStep();
    });
  };

  useEffect(() => {
    selected > -1 && press();
  }, [selected]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setSelected(1)}>
        <Animated.View
          style={[
            styles.button,
            selected === 1 && {transform: [{scale: fadeAnim}]},
          ]}>
          <Image source={BananaTrash} />
          <Text style={[styles.buttonText, styles.buttonTextTrash]}>
            Residuos
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelected(0)}>
        <Animated.View
          style={[
            styles.button,
            selected === 0 && {transform: [{scale: fadeAnim}]},
          ]}>
          <Image source={Recycle} />
          <Text style={[styles.buttonText, styles.buttonTextRecycle]}>
            Reciclable
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    height: moderateScale(130),
    width: moderateScale(130),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    marginTop: 15,
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
  },
  buttonTextRecycle: {
    color: '#6EB38E',
  },
  buttonTextTrash: {
    color: '#9E9797',
  },
});

export default SelectType;
