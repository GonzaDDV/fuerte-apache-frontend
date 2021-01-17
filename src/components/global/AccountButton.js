import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';

const AccountButton = ({text, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#65B98F',
    paddingVertical: 14,
    borderRadius: 1000,
    marginHorizontal: width * 0.075,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
  },
});

export default AccountButton;
