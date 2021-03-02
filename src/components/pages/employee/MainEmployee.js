import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import Map from '../../global/Map';
import {createStackNavigator} from '@react-navigation/stack';

import SelectType from './SelectType';
import EmployeeMap from './EmployeeMap';
import StartRoute from './StartRoute';
import Route from './Route';
import MarkerPopup from './MarkerPopup';
import NewMap from './NewMap';

const MainEmployee = () => {
  const Stack = createStackNavigator();

  return (
    <View style={styles.mainContainer}>
      <Stack.Navigator>
        <Stack.Screen
          name="Select Type"
          component={SelectType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={NewMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Popup"
          component={MarkerPopup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
  },
});

export default MainEmployee;
