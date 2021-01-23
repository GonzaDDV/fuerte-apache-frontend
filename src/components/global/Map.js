import React, {useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import {getUserLocation} from '../../functions/UserLocation';

const Map = (props) => {
  const mapRef = useRef(null);

  const goToUserLocation = async () => {
    await getUserLocation(async (position) => {
      console.log(position);
      const {latitude, longitude} = position.coords;
      mapRef.current.animateCamera({
        zoom: 15.6,
        center: {
          latitude,
          longitude,
        },
      });
    });
  };

  useEffect(() => {
    goToUserLocation();
  }, []);

  return (
    <MapView
      accessible={false}
      showsCompass={false}
      moveOnMarkerPress={false}
      style={{
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton={false}
      ref={mapRef}>
      {props.children}
    </MapView>
  );
};

export default Map;
