import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Switch,
  Alert,
  Image,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
  Circle,
} from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';
//import Geocoder from 'react-native-geocoder';
import {getUserLocation} from '../../../functions/UserLocation';
import AsyncStorage from '@react-native-community/async-storage';
import {decode} from 'base-64';

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';
import Popup from '../../global/Popup';
import axios from 'axios';
import LoadingScreen from '../../global/LoadingScreen';
import {useStoreState} from 'easy-peasy';

const GOOGLE_MAPS_APIKEY = '';

const CitizenMap = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: -34.51260962788937,
    longitude: -58.4848275202878,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  });
  const [userLocation, setUserLocation] = useState({
    latitude: -34.51260962788937,
    longitude: -58.4848275202878,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const citizenInfo = useStoreState((state) => state.citizen);

  const mapRef = useRef(null);

  const fetchUserLocation = async () => {
    await getUserLocation(
      (pos) => {
        const initialPosition = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        };
        mapRef.current.setCamera({
          center: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          heading: 0,
          pitch: 0,
        });
        setLoading(false);
        setUserLocation(initialPosition);
      },
      () => setLoading(false),
    );
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const sendLocation = async () => {
    // enviar al servidor
    const data = Object.values(citizenInfo.types)
      .map((type, index) =>
        type.selected ? {tipo_res: index, cantidad_bolsas: type.amount} : null,
      )
      .filter((item) => item);


    const token = await AsyncStorage.getItem('token');
    const payload = JSON.parse(decode(token.split('.')[1]));
    const idUsuario = payload.result.id_usuario;
    const res = await axios.post(
      'https://fuerteback.stemit.com.ar/api/users/postResiduo',
      {
        id_usuario: idUsuario, // del login
        ubicacion: {
          lat: region.latitude,
          lng: region.longitude,
        },
        fecha_hora_emision: Date.now().toLocaleString(),
        data,
        comentarios: citizenInfo?.message,
      },
    );
    if (res.data?.success === 1) setSuccess(true);
    else setError(true);
  };

  return (
    <View style={styles.container}>
      {loading && <LoadingScreen />}
      {success && (
        <Popup
          close={() => navigation.navigate('Home')}
          text="¡Residuos entregados correctamente!"
        />
      )}
      {error && (
        <Popup
          error={true}
          close={() => setError(false)}
          text="Hubo un error al enviar su residuo, intente nuevamente"
        />
      )}
      <View style={styles.button}>
        <TouchableOpacity onPress={() => sendLocation()}>
          <Text style={styles.text}>Confirmar ubicacion</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: '50%',
          left: '50%',
          marginLeft: -24,
          marginTop: -48,
          position: 'absolute',
          zIndex: 100,
        }}>
        <Image
          style={{
            height: 48,
            width: 48,
          }}
          source={require('../../../assets/marker.png')}
        />
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={userLocation}
        //followUserLocation={true}
        onRegionChangeComplete={(region) => setRegion(region)}
        showsUserLocation={true}
        //zoomEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  marker: {
    height: 48,
    width: 48,
  },
  button: {
    backgroundColor: '#6EB38E',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    width: '90%',
    zIndex: 100,
    bottom: height * 0.1,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(16),
  },
});

export default CitizenMap;
