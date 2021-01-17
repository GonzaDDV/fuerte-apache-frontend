import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {moderateScale, height} from '../../../functions/ResponsiveFontSize';

const StartRoute = ({nextStep}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={nextStep}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar recorrido</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: height * 0.085,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#65B98F',
    paddingHorizontal: moderateScale(60),
    paddingVertical: moderateScale(12),
    borderRadius: 18,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(20),
    fontFamily: 'Nunito-Regular',
  },
});

export default StartRoute;
