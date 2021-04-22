import React, {useCallback} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {useFocusEffect} from '@react-navigation/native';
import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';

const AccountButton = ({text, onPress}) => {
  const loading = useStoreState((state) => state.account.loading);
  const setLoading = useStoreActions((actions) => actions.setLoading);

  const setLoadingFalse = useCallback(() => {
    return () => setLoading(false);
  }, []);

  useFocusEffect(setLoadingFalse);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator style={styles.loader} color="#fff" />
          </View>
        )}
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
    overflow: 'hidden',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: moderateScale(16),
    
  },
  loaderContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    left: 0,
    zIndex: 100,
    backgroundColor: '#65B98F',
  },
  loader: {},
});

export default AccountButton;
