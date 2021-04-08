import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

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
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const CustomHeader = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Dirección del usuario</Text>
    </View>
  );
};

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

      <Stack.Navigator
        screenOptions={{
          header: () => (
            <View style={styles.header}>
              <FontAwesome
                name="map-marker-alt"
                size={moderateScale(16)}
                color="#fff"
              />
              <Text style={styles.headerTitle}>Dirección del usuario</Text>
              <FontAwesome
                name="chevron-down"
                size={moderateScale(16)}
                color="#fff"
              />
            </View>
          ),
        }}>
        <Stack.Screen name="Select Type" component={SelectType} />
        <Stack.Screen name="Select Amount" component={SelectAmount} />
        <Stack.Screen name="Send Message" component={SendMessage} />
        <Stack.Screen name="Select Location" component={SelectLocation} />
        <Stack.Screen name="Location Map" component={CitizenMap} />
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
  header: {
    position: 'absolute',
    top: 0,
    width,
    zIndex: 1000,
    marginBottom: 20,
    height: height * 0.085,
    backgroundColor: '#65B98F',
    elevation: 6,
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: moderateScale(16),
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: width * 0.03,
  },
});

export default MainCitizen;
