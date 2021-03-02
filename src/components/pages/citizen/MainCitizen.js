import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import SelectAmount from './SelectAmount';
import SelectType from './SelectType';
import SelectLocation from './SelectLocation';
import SendMessage from './SendMessage';

import Popup from '../../global/Popup';
import {createStackNavigator} from '@react-navigation/stack';
import LocationMap from './LocationMap';
import CitizenMap from './CitizenMap';

const MainCitizen = () => {
  const [success, setSuccess] = useState(false);

  const Stack = createStackNavigator();

  return (
    <View style={styles.mainContainer}>
      {/* <Map />
      {success && (
        <Popup
          close={() => {
            setSuccess(false);
            setCurrentStep(0);
          }}
          icon="check-circle"
          title="¡Listo!"
          text="Sus residuos serán recogidos pronto. ¡Muchas gracias!"
        />
      )} */}
      <Stack.Navigator>
        <Stack.Screen
          name="Select Type"
          component={SelectType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Select Amount"
          component={SelectAmount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Send Message"
          component={SendMessage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Select Location"
          component={SelectLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location Map"
          component={CitizenMap}
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
  background: {
    width,
    height,
  },
  bottomMenu: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.05,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
});

export default MainCitizen;
