import React, {useState, useEffect} from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Recycle from '../../../assets/images/recycle.svg';
import Batteries from '../../../assets/images/batteries.svg';
import BananaTrash from '../../../assets/images/trash-2.svg';
import {useStoreActions, useStoreState} from 'easy-peasy';

const SelectType = ({navigation}) => {
  const selected = useStoreState((state) => state.employee.types);
  const setSelected = useStoreActions((actions) => actions.setEmployeeSelected);
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    const selectedTrue =
      Object.values(selected).filter((item) => item.selected === true).length >=
      1;
    setCanContinue(selectedTrue);
  }, [selected]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Elegí tu recorrido</Text>
      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback onPress={() => setSelected('trash')}>
          <Animated.View
            style={[
              styles.button,
              styles.buttonTrash,
              selected.trash.selected === true && styles.buttonTrashSelected,
            ]}>
            {selected.trash.selected === true && (
              <View style={[styles.tick, styles.tickTrash]}>
                <FontAwesome
                  name="check"
                  size={moderateScale(12)}
                  color="#fff"
                />
              </View>
            )}
            <BananaTrash
              // source={BananaTrash}
              width={moderateScale(75)}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonTextTrash]}>
              Orgánicos
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setSelected('recycle')}>
          <Animated.View
            style={[
              styles.button,
              styles.buttonRecycle,
              selected.recycle.selected === true &&
                styles.buttonRecycleSelected,
            ]}>
            {selected.recycle.selected === true && (
              <View style={[styles.tick, styles.tickRecycle]}>
                <FontAwesome
                  name="check"
                  size={moderateScale(12)}
                  color="#fff"
                />
              </View>
            )}
            <Recycle
              // source={Recycle}
              width={moderateScale(75)}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonTextRecycle]}>
              Reciclable
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setSelected('special')}>
          <Animated.View
            style={[
              styles.button,
              styles.buttonSpecial,
              selected.special.selected === true &&
                styles.buttonSpecialSelected,
            ]}>
            {selected.special.selected === true && (
              <View style={[styles.tick, styles.tickSpecial]}>
                <FontAwesome
                  name="check"
                  size={moderateScale(12)}
                  color="#fff"
                />
              </View>
            )}
            <Batteries
              // source={Batteries}
              width={moderateScale(75)}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonTextSpecial]}>
              Especiales
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      {canContinue && (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Map')}>
          <View style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Confirmar</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
    backgroundColor: '#6EB38E',
    alignItems: 'center',
    paddingTop: height * 0.13,
  },
  title: {
    fontSize: moderateScale(30),
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    marginBottom: height * 0.05,
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#fff',
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    position: 'relative',
  },
  buttonImage: {width: '50%'},
  buttonText: {
    marginTop: 15,
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
  },
  tick: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    elevation: 6,
    borderRadius: 1000,
  },
  nextButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: width * 0.075,
    paddingVertical: height * 0.015,
    marginTop: height * 0.1,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: moderateScale(20),
  },

  buttonTrashSelected: {
    borderWidth: 4,
    borderColor: '#A67E74',
  },
  buttonRecycleSelected: {
    borderWidth: 4,
    borderColor: '#6EB38E',
  },
  buttonSpecialSelected: {
    borderWidth: 4,
    borderColor: '#3F5C6C',
  },
  buttonTextTrash: {
    color: '#A67E74',
  },
  buttonTextRecycle: {
    color: '#6EB38E',
  },
  buttonTextSpecial: {
    color: '#3F5C6C',
  },
  tickTrash: {
    backgroundColor: '#A67E74',
  },
  tickRecycle: {
    backgroundColor: '#6EB38E',
  },
  tickSpecial: {
    backgroundColor: '#3F5C6C',
  },
});

export default SelectType;
