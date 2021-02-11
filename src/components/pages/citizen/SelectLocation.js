import React from 'react';
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

import CurrentLocation from '../../../assets/images/location-1.png';
import ChooseLocation from '../../../assets/images/location-2.png';

const SelectLocation = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Elegir ubicación</Text>
      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.buttonRecycle]}>
            <Image
              source={CurrentLocation}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonTextRecycle]}>
              Ubicación actual
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Location Map')}>
          <Animated.View style={[styles.button, styles.buttonSpecial]}>
            <Image
              source={ChooseLocation}
              style={styles.buttonImage}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonTextSpecial]}>
              Seleccionar en el mapa
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
    backgroundColor: '#6EB38E',
    alignItems: 'center',
    paddingTop: height * 0.1,
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
  },
  button: {
    backgroundColor: '#fff',
    height: height * 0.3,
    width: height * 0.3,
    marginVertical: moderateScale(10),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    position: 'relative',
  },
  buttonImage: {
    width: '50%',
  },
  buttonText: {
    marginTop: 15,
    width: '70%',
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
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

export default SelectLocation;
