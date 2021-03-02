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

import {
  width,
  height,
  moderateScale,
} from '../../../functions/ResponsiveFontSize';
import Popup from '../../global/Popup';
import axios from 'axios';
import LoadingScreen from '../../global/LoadingScreen';
import {useStoreState} from 'easy-peasy';
import StartRoute from './StartRoute';
import MarkerPopup from './MarkerPopup';

const GOOGLE_MAPS_APIKEY = '';

const NewMap = ({navigation}) => {
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [open, setOpen] = useState({open: false, markerInfo: {}});

  const employeeInfo = useStoreState((state) => state.employee);

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

  const getMarkers = async () => {
    // enviar al servidor
    const selectedType = Object.values(employeeInfo.types)
      .map((item, index) => (item.selected === true ? index + '' : null))
      .filter((item) => item);
    console.log(selectedType);
    const res = await axios.get(
      `http://54.147.130.75:3000/api/users/getResiduos1/${selectedType}`,
    );
    if (res.data?.success === 1) {
      setMarkers(res.data.data);
      setError(false);
    } else setError(true);
  };

  useEffect(() => {
    fetchUserLocation();
    getMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={userLocation}
        //followUserLocation={true}
        onRegionChangeComplete={(region) => setRegion(region)}
        showsUserLocation={true}>
        {markers.map((marker, item) => (
          <Marker
            key={marker.id_residuo}
            coordinate={{
              latitude: JSON.parse(marker.ubicacion).lat,
              longitude: JSON.parse(marker.ubicacion).lng,
            }}
            /* onPress={() =>
              setOpen(
                open: true,
                markerInfo: {
                name: 'Mateo Benítez',
                address: 'Roosevelt 5647',
                trash:
                    marker.tipo_res === 0
                    ? {number: marker.cantidad_bolsas, label: 'Residuos'}
                    : null,
                recycle:
                    marker.tipo_res === 1
                    ? {number: marker.cantidad_bolsas, label: 'Reciclable'}
                    : null,
                special:
                    marker.tipo_res === marker.cantidad_bolsas
                    ? {number: 2, label: 'Especial'}
                    : null,
                },                
              )} */
            onPress={() =>
              setOpen({
                open: true,
                markerInfo: {
                  name: 'Mateo Benítez',
                  address: 'Roosevelt 5647',
                  trash:
                    marker.tipo_res === '0'
                      ? {number: marker.cantidad_bolsas, label: 'Residuos'}
                      : null,
                  recycle:
                    marker.tipo_res === '1'
                      ? {number: marker.cantidad_bolsas, label: 'Reciclable'}
                      : null,
                  special:
                    marker.tipo_res === '2'
                      ? {number: 2, label: 'Especial'}
                      : null,
                },
              })
            }></Marker>
        ))}
      </MapView>
      {loading && <LoadingScreen />}
      <StartRoute navigation={navigation} />
      {error && (
        <Popup
          error={true}
          close={() => setError(false)}
          text="Hubo un error al recoger los residuos."
        />
      )}
      {open.open && (
        <MarkerPopup
          cards={[open.markerInfo]}
          close={() => {
            setOpen({open: false});
          }}
        />
      )}
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

export default NewMap;
