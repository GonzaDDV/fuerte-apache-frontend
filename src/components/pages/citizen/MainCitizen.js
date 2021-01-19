import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';

import MapBackground from '../../../assets/images/map-background.png';

import SelectAmount from './SelectAmount';
import SelectType from './SelectType';
import Popup from '../../global/Popup';
import MapView from 'react-native-maps';

const MainCitizen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const MAP_STYLE = [
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const [success, setSuccess] = useState(false);

  const steps = {
    0: <SelectType nextStep={nextStep} />,
    1: (
      <SelectAmount
        nextStep={nextStep}
        prevStep={prevStep}
        setSuccess={setSuccess}
      />
    ),
  };

  return (
    <View style={styles.mainContainer}>
      <MapView
        accessible={false}
        showsCompass={false}
        moveOnMarkerPress={false}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}></MapView>
      {success && (
        <Popup
          close={() => setSuccess(false)}
          icon="check-circle"
          title="¡Listo!"
          text="Sus residuos serán recogidos pronto. ¡Muchas gracias!"
        />
      )}
      <View style={styles.bottomMenu}>{steps[currentStep]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    height,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  background: {
    width,
    height,
  },
  bottomMenu: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.05,
    position: 'absolute',
    bottom: 25,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
});

export default MainCitizen;
