import React from 'react';

import {TextInput, View, StyleSheet, Text} from 'react-native';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Input = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <MaterialIcons
          style={styles.inputIcon}
          name={props.icon}
          size={moderateScale(20)}
          color={props.error ? '#F44336' : '#65B98F'}
        />
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          keyboardType={props.type || 'default'}
          placeholderTextColor="#AFAFAF"
          secureTextEntry={props.pass}
          {...props}
        />
      </View>
      {props.error && (
        <Text style={styles.error}>
          {props.error.message || 'Por favor, rellene este campo'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: width * 0.075,
    marginVertical: height * 0.01,
  },
  inputContainer: {
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputIcon: {
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    borderRadius: 14,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 0,
    backgroundColor: '#fff',
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
  },
  error: {
    color: '#F44336',
    marginVertical: 8,
    marginLeft: 6,
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-Regular',
  },
});

export default Input;
