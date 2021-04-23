import {useStoreActions} from 'easy-peasy';
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {moderateScale, height} from '../../../functions/ResponsiveFontSize';

const Route = ({finish}) => {
  const finishRoute = useStoreActions((actions) => actions.finishRoute);

  const onFinishRoute = () => {
    finishRoute({callback: () => finish()});
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={onFinishRoute}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Terminar recorrido</Text>
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
    backgroundColor: '#B96565',
    paddingHorizontal: moderateScale(60),
    paddingVertical: moderateScale(12),
    borderRadius: 18,
    marginTop: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(20),
    fontFamily: 'Nunito-Regular',
  },
});

export default Route;
