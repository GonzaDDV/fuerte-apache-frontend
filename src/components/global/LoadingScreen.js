import React from 'react';
import {} from 'react-native';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {height, width} from '../../functions/ResponsiveFontSize';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    zIndex: 10000,
    width,
    height,
    backgroundColor: '#65B98F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
