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
import {StoreProvider} from 'easy-peasy';
import {store} from './src/state/store';
import {LogBox} from 'react-native';
import Thanks from './src/components/pages/Thanks';

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }, []);
  return (
    <>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Thanks"
              component={Thanks}
              options={{
                headerStyle: {
                  backgroundColor: '#6EB38E',
                },
                headerTintColor: '#fff',
                headerTitle: '',
              }}
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
      </StoreProvider>
    </>
  );
};

export default App;
