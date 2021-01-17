import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import SelectTypeButtons from '../citizen/SelectType';

const SelectType = ({nextStep}) => {
  return (
    <View style={styles.bottomMenu}>
      <Text style={styles.title}>Elige tu recorrido</Text>
      <View style={styles.buttonsContainer}>
        <SelectTypeButtons nextStep={nextStep} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width,
    paddingVertical: height * 0.05,
    position: 'absolute',
    bottom: 25,
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
