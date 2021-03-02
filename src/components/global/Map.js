import React from 'react';
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
import {getUserLocation} from '../../functions/UserLocation';

import {width, height, moderateScale} from '../../functions/ResponsiveFontSize';
import Popup from './Popup';
import axios from 'axios';

const origin = {latitude: -34.51257677882224, longitude: -58.48521799748956};
const destination = {
  latitude: -34.54890367500137,
  longitude: -58.454655947639345,
};
const GOOGLE_MAPS_APIKEY = '';
let id = 0;
const latDelta = 0.025;
const lonDelta = 0.025;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -34.51260962788937,
        longitude: -58.4848275202878,
        latDelta,
        lonDelta,
      },
      markers: [],

      //destino: {
      //  lat: -34.54890367500137,
      //  lon: -58.454655947639345
      //}
    };
  }

  async currentLocation() {
    await getUserLocation((pos) => {
      let initialPosition = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025,
      };
      this.setState({initialPosition});
    });
  }

  componentDidMount() {
    this.currentLocation();
  }

  onChangeValue = (region) => {
    this.setState({
      region,
    });
  };

  sendLocation = async () => {
    // enviar al servidor
    const res = await axios.post(
      'http://54.147.130.75:3000/api/users/postResiduo',
      {
        id_usuario: 5, // del login
        ubicacion: JSON.stringify({
          lat: this.state.region.latitude,
          lng: this.state.region.longitude,
        }), //
        fecha_hora_emision: Date.now().toLocaleString(),
        cantidad_bolsas: 0, // estado
        tipo_residuo: 'recycle',
      },
    );
    console.log(res.data);
    if (res.data?.success === 1) this.setState({success: true});
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.state.success && (
          <Popup
            close={() => navigation.navigate('Home')}
            text="¡Residuos entregados correctamente!"
          />
        )}
        <View style={styles.button}>
          <TouchableOpacity onPress={this.sendLocation}>
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
            source={require('../../assets/marker.png')}
          />
        </View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          initialRegion={this.state.initialPosition}
          //followUserLocation={true}
          onRegionChangeComplete={this.onChangeValue}
          //zoomEnabled={true}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

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
