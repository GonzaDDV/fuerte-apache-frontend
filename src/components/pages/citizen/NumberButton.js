import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

const NumberButton = (props) => {
  const {number, setSelectedNumber, selectedNumber} = props;
  const isSelected = number === selectedNumber;
  return (
    <TouchableWithoutFeedback onPress={() => setSelectedNumber(number)}>
      <View style={[styles.button, isSelected && styles.selected]}>
        <Text style={[styles.buttonText, isSelected && styles.selectedText]}>
          {number || '+'}
        </Text>
      </View>
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
  selected: {
    backgroundColor: '#65B98F',
  },
  selectedText: {
    color: '#fff',
  },
});

export default NumberButton;
