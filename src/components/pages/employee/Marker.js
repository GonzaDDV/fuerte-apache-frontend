import React, {useState} from 'react';
import {Marker} from 'react-native-maps';

import MarkerSpecial from '../../../assets/images/marker-special.svg';
import MarkerRecycle from '../../../assets/images/marker-recycle.svg';
import MarkerTrash from '../../../assets/images/marker-trash.svg';
import MarkerSpecialCollected from '../../../assets/images/marker-special-collected.svg';
import MarkerRecycleCollected from '../../../assets/images/marker-recycle-collected.svg';
import MarkerTrashCollected from '../../../assets/images/marker-trash-collected.svg';
import {moderateScale} from '../../../functions/ResponsiveFontSize';
import MarkerPopup from './MarkerPopup';

const getMarkerIcon = (type, collected) => {
  const icons = {
    collected: {
      0: (
        <MarkerTrashCollected height={moderateScale(52)} resizeMode="center" />
      ),
      1: (
        <MarkerRecycleCollected
          height={moderateScale(52)}
          resizeMode="center"
        />
      ),
      2: (
        <MarkerSpecialCollected
          height={moderateScale(52)}
          resizeMode="center"
        />
      ),
    },
    notCollected: {
      0: <MarkerTrash height={moderateScale(40)} resizeMode="center" />,
      1: <MarkerRecycle height={moderateScale(40)} resizeMode="center" />,
      2: <MarkerSpecial height={moderateScale(40)} resizeMode="center" />,
    },
  };
  return collected ? icons.collected[type] : icons.notCollected[type];
};
const CustomMarker = ({marker, item, setOpen, routeStarted}) => {
  return (
    <Marker
      coordinate={{
        latitude: JSON.parse(marker.ubicacion).lat,
        longitude: JSON.parse(marker.ubicacion).lng,
      }}
      tracksViewChanges={false}
      onPress={() =>
        routeStarted &&
        !marker.collected &&
        setOpen({
          open: true,
          markerInfo: {
            name: marker.nombre + ' ' + marker.apellido,
            address: 'Dirección no disponible',
            id: marker.id_residuo,
            trash:
              marker.tipo_res === '0'
                ? {number: marker.cantidad_bolsas, label: 'Orgánicos'}
                : null,
            recycle:
              marker.tipo_res === '1'
                ? {number: marker.cantidad_bolsas, label: 'Reciclable'}
                : null,
            special:
              marker.tipo_res === '2' ? {number: marker.cantidad_bolsas, label: 'Especial'} : null,
          },
        })
      }>
      {getMarkerIcon(marker.tipo_res, marker.collected)}
    </Marker>
  );
};

export default React.memo(CustomMarker);
