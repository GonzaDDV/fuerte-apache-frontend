import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import NumberButton from './NumberButton';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';
import {useStoreActions, useStoreState} from 'easy-peasy';

const SelectAmount = ({route, navigation}) => {
  const setAmount = useStoreActions((actions) => actions.setAmount);
  const selected = useStoreState((state) => state.citizen.types);
  /* const {selected} = route.params;
   const [selectedNumber, setSelectedNumber] = useState({
    trash: 1,
    special: 1,
    recycle: 1,
  }); */

  const changeNumber = (type, amount) => {
    setAmount({type, amount});
  };

  const nextStep = () => navigation.navigate('Send Message');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Cantidad de bolsas</Text>
      {selected.trash.selected && (
        <View style={styles.numberButtonsContainer}>
          <View style={styles.labelContainer}>
            <View style={[styles.shortBar, {backgroundColor: '#A67E74'}]} />
            <Text style={[styles.label, {color: '#A67E74'}]}>Orgánicos</Text>
            <View style={[styles.fullBar, {backgroundColor: '#A67E74'}]} />
          </View>
          <View style={styles.numbers}>
            {Array(5)
              .fill(0)
              .map((item, i) => (
                <NumberButton
                  color="#A67E74"
                  number={i === 4 ? 0 : i + 1}
                  key={i}
                  selectedNumber={selected.trash.amount}
                  setSelectedNumber={(number) => changeNumber('trash', number)}
                />
              ))}
          </View>
        </View>
      )}
      {selected.recycle.selected && (
        <View style={styles.numberButtonsContainer}>
          <View style={styles.labelContainer}>
            <View style={[styles.shortBar, {backgroundColor: '#65B98F'}]} />
            <Text style={[styles.label, {color: '#65B98F'}]}>Reciclaje</Text>
            <View style={[styles.fullBar, {backgroundColor: '#65B98F'}]} />
          </View>
          <View style={styles.numbers}>
            {Array(5)
              .fill(0)
              .map((item, i) => (
                <NumberButton
                  color="#65B98F"
                  number={i === 4 ? 0 : i + 1}
                  key={i}
                  selectedNumber={selected.recycle.amount}
                  setSelectedNumber={(number) =>
                    changeNumber('recycle', number)
                  }
                />
              ))}
          </View>
        </View>
      )}
      {selected.special.selected && (
        <View style={styles.numberButtonsContainer}>
          <View style={styles.labelContainer}>
            <View style={[styles.shortBar, {backgroundColor: '#3F5C6C'}]} />
            <Text style={[styles.label, {color: '#3F5C6C'}]}>Especial</Text>
            <View style={[styles.fullBar, {backgroundColor: '#3F5C6C'}]} />
          </View>
          <View style={styles.numbers}>
            {Array(5)
              .fill(0)
              .map((item, i) => (
                <NumberButton
                  color="#3F5C6C"
                  number={i === 4 ? 0 : i + 1}
                  key={i}
                  selectedNumber={selected.special.amount}
                  setSelectedNumber={(number) =>
                    changeNumber('special', number)
                  }
                />
              ))}
          </View>
        </View>
      )}
      <View style={styles.buttons}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Select Type')}>
          <View style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={nextStep}>
          <View style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: height * 0.13,
    paddingBottom: height * 0.1,
  },
  title: {
    color: '#65B98F',
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
  },
  numberButtonsContainer: {
    width: width * 0.8,
    marginBottom: moderateScale(30),
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortBar: {width: 20, height: 2, marginBottom: 8},
  fullBar: {flex: 1, height: 2, marginBottom: 8},
  label: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(12),
    fontFamily: 'Nunito-Regular',
    paddingHorizontal: moderateScale(8),
  },
  labelTrash: {
    color: '#A67E74',
  },
  labelRecycle: {
    color: '#65B98F',
  },
  labelSpecial: {
    color: '#3F5C6C',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: moderateScale(40),
    marginBottom: moderateScale(20),
    marginTop: 'auto',
    width,
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
