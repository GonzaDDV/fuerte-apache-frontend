import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import NumberButton from './NumberButton';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

const SelectAmount = ({nextStep, prevStep, setSuccess}) => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <>
      <View>
        <Text style={styles.title}>Cantidad de bolsas</Text>
        <View style={styles.numbers}>
          <NumberButton
            number={1}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          <NumberButton
            number={2}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          <NumberButton
            number={3}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          <NumberButton
            number={4}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
          <NumberButton
            number={0}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableWithoutFeedback onPress={prevStep}>
            <View style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setSuccess(true)}>
            <View style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#65B98F',
    fontSize: moderateScale(26),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '90%',
    marginVertical: 30,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width * 0.8,
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: '#65B98F',
    borderRadius: 12,
    paddingHorizontal: width * 0.075,
    paddingVertical: height * 0.015,
  },
  cancelButtonText: {
    color: '#65B98F',
    fontSize: moderateScale(18),
  },
  confirmButton: {
    backgroundColor: '#65B98F',
    borderRadius: 12,
    paddingHorizontal: width * 0.075,
    paddingVertical: height * 0.015,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: moderateScale(18),
  },
});

export default SelectAmount;
