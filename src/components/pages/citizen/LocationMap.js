import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Map from '../../global/Map';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import Input from '../../global/Input';

const LocationMap = () => {
  return (
    <View style={styles.mainContainer}>
      <Map />
      <View style={styles.bottomMenu}>
        <Text style={styles.title}>Confirmá tu ubicación</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#AFAFAF"
        />
        <TextInput
          style={styles.input}
          placeholder="Barrio"
          placeholderTextColor="#AFAFAF"
        />
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
    position: 'relative',
  },
  bottomMenu: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    color: '#65B98F',
    fontSize: moderateScale(28),
    
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    padding: 12,
    paddingLeft: 20,
    fontSize: moderateScale(16),
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginVertical: moderateScale(8),
  },
  button: {
    backgroundColor: '#65B98F',
    paddingVertical: moderateScale(14),
    borderRadius: 100,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
});

export default LocationMap;
