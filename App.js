/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {PermissionsAndroid} from 'react-native';

import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {NavigationContainer} from '@react-navigation/native';

import Home from './src/components/pages/Home';
import CitizenMap from './src/components/pages/citizen/MainCitizen';
import EmployeeMap from './src/components/pages/employee/MainEmployee';
import Login from './src/components/pages/account/Login';
import Register from './src/components/pages/account/Register';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Citizen Map"
            component={CitizenMap}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Employee Map"
            component={EmployeeMap}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
