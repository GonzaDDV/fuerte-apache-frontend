import Geolocation from 'react-native-geolocation-service';
import {Alert} from 'react-native';

export const getUserLocation = (fallback, errorFn = null) => {
  Geolocation.getCurrentPosition(
    async (position) => {
      fallback && fallback(position);
    },
    (error) => {
      Alert.alert('Error', JSON.stringify(error));
      errorFn && errorFn();
    },
    {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
  );
};
