import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import MessageImage from '../../../assets/images/message.svg';

const LocationMap = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Enviá un mensaje al recolector</Text>
      {/* <Image source={Message} style={styles.image} resizeMode="contain" /> */}
      <MessageImage width={width * 0.4} height={width * 0.4} />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu mensaje aquí"
        placeholderTextColor="#65B98F"
        multiline={true}
        numberOfLines={5}
      />
      <View style={styles.buttons}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Select Amount')}>
          <View style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Location Map')}>
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
    paddingVertical: height * 0.13,
    paddingHorizontal: width * 0.05,
  },

  title: {
    color: '#65B98F',
    fontSize: moderateScale(28),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  image: {
    width: width * 0.5,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 14,
    borderColor: '#65B98F',
    color: '#65B98F',
    padding: moderateScale(20),
    fontSize: moderateScale(16),
    textAlignVertical: 'top',
    height: height * 0.2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 'auto',
    width: '100%',
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

export default LocationMap;
