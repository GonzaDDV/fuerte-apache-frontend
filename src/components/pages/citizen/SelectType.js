import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import Recycle from '../../../assets/images/recycle.png';
import Trash from '../../../assets/images/trash.png';

const SelectType = ({nextStep}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={nextStep}>
        <View style={styles.button}>
          <Image source={Recycle} />
          <Text style={[styles.buttonText, styles.buttonTextRecycle]}>
            Reciclable
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={nextStep}>
        <View style={styles.button}>
          <Image source={Trash} />
          <Text style={[styles.buttonText, styles.buttonTextTrash]}>
            Residuos
          </Text>
        </View>
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
