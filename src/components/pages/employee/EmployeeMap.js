import axios from 'axios';
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
import {getUserLocation} from '../../../functions/UserLocation';
import Popup from '../../global/Popup';
import MarkerPopup from './MarkerPopup';
import StartRoute from './StartRoute';

const {width, height} = Dimensions.get('window');

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
      open: {
        open: false,
        markerInfo: {},
      },
      markers: [],

      toggle: false,
      residuos: [],
      error: false,
      //destino: {
      //  lat: -34.54890367500137,
      //  lon: -58.454655947639345
      //}

      /* residuos: [
        {
          id_residuo: '1',
          ubicacion: {
            lat: -34.50469966861708,
            lon: -58.48879929631948,
          },
          cantidad_bolsas: '4',
          //fecha_hora_emision:"",
        },
        {
          id_residuo: '2',
          ubicacion: {
            lat: -34.51865274201799,
            lon: -58.49203269928694,
          },
          cantidad_bolsas: '2',
          //fecha_hora_emision:"",
        },
        {
          id_residuo: '3',
          ubicacion: {
            lat: -34.52326678455729,
            lon: -58.48206594586372,
          },
          cantidad_bolsas: '2',
          //fecha_hora_emision:"",
        },
        {
          id_residuo: '4',
          ubicacion: {
            lat: -34.52571085560793,
            lon: -58.491232730448246,
          },
          cantidad_bolsas: '1',
          // fecha_hora_emision:"",
        },
        {
          id_residuo: '5',
          ubicacion: {
            lat: -34.50469966861708,
            lon: -58.48239921033383,
          },
          cantidad_bolsas: '3',
          //fecha_hora_emision:"",
        },
      ], */
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

  loadMarkers = async () => {
    const res = await axios.get(
      'http://54.147.130.75:3000/api/users/getResiduos1/0',
    );
    if (res.data.success === 1)
      this.setState({
        residuos: res.data.data,
        error: false,
      });
    else this.setState({error: true});
  };

  markersResiduos = () => {
    console.log(this.state.residuos);
    return this.state.residuos.map((residuos, item) => (
      <Marker
        key={residuos.id_residuo} //sino me tira un error (warning each child in a list should have a unique key prop)
        coordinate={{
          latitude: JSON.parse(residuos.ubicacion).lat,
          longitude: JSON.parse(residuos.ubicacion).lng,
        }}
        onPress={() =>
          this.setState({
            open: {
              open: true,
              markerInfo: {
                name: 'Mateo Benítez',
                address: 'Roosevelt 5647',
                trash:
                  residuos.tipo_res === 0
                    ? {number: residuos.cantidad_bolsas, label: 'Residuos'}
                    : null,
                recycle:
                  residuos.tipo_res === 1
                    ? {number: residuos.cantidad_bolsas, label: 'Reciclable'}
                    : null,
                special:
                  residuos.tipo_res === residuos.cantidad_bolsas
                    ? {number: 2, label: 'Especial'}
                    : null,
              },
            },
          })
        }
        description={
          'En ese punto hay ' + residuos.cantidad_bolsas + ' bolsas'
        }></Marker>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{align: 'center', zIndex: 100}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert(
                JSON.stringify(
                  'latituud: ' +
                    this.state.region.latitude +
                    ' longitude: ' +
                    this.state.region.longitude,
                ),
              );
            }}>
            <Text style={styles.text}>Confirmar ubicacion</Text>
          </TouchableOpacity>
        </View> */}
        <StartRoute navigation={this.props.navigation} />
        {this.state.open.open && (
          <MarkerPopup
            close={() => {
              this.setState({open: {open: false}});
            }}
          />
        )}
        {this.state.error && (
          <Popup
            error={true}
            close={() => this.setState({error: false})}
            text="No se pudieron cargar los residuos"
          />
        )}
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          initialRegion={this.state.initialPosition}
          //followUserLocation={true}
          onRegionChangeComplete={this.onChangeValue}
          //zoomEnabled={true}
          onMapReady={this.loadMarkers}
          showsUserLocation={true}>
          {this.markersResiduos()}

          {/* 

          <View style={{align: 'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert(
                  JSON.stringify(
                    'latituud: ' +
                      this.state.region.latitude +
                      ' longitude: ' +
                      this.state.region.longitude,
                  ),
                );
              }}>
              <Text style={styles.text}>Confirmar ubicacion</Text>
            </TouchableOpacity>
          </View>

          <Switch
            trackColor={{false: 'gray', true: 'blue'}}
            thumbColor="white"
            ios_backgroundColor="gray"
            onValueChange={(value) => this.setState({toggle: value})}
            value={this.state.toggle}
            paddingVertical={10}
            alignItemsArr={'center'}
            style={
              ({transform: [{scaleX: 0.9}, {scaleY: 0.9}]}, {marginTop: 180})
            }
          /> */}

          {/* {this.state.markers.map((marker) => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              title={'Marker Nº' + marker.key}
              description={JSON.stringify(marker.coordinate)}
            />
          ))} */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
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
    backgroundColor: '#98FF98',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
