import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import jwtoken from 'react-native-pure-jwt';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';

import Waves from '../../assets/images/waves-1.png';
import Button1 from '../../assets/images/button-1.svg';
import Button2 from '../../assets/images/button-2.svg';
import ThanksButton from '../../assets/images/thanks-button.svg';
import StoreButton from '../../assets/images/store-button.svg';
import CerrarSesion from '../../assets/images/cerrar-sesion.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {useStoreActions} from 'easy-peasy';
import {useFocusEffect} from '@react-navigation/native';
import {decode} from 'base-64';
import {ImageBackground} from 'react-native';

const Home = ({navigation}) => {
  const resetState = useStoreActions((actions) => actions.resetState);
  const logout = useStoreActions((actions) => actions.logout)

  const [isEmployee, setIsEmployee] = useState(false);

  useFocusEffect(() => {
    resetState();

    goToScreen('Home')

    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token != '0') {
        const payload = JSON.parse(decode(token.split('.')[1]));
        const tipoUsuario = payload.result.tipo_usuario;
        setIsEmployee(tipoUsuario === 'recolector');
      }
      else {
        setIsEmployee(false);
      }
    };
    getToken();
  }, []);

  const handleLogout = () => {
    logout({callback: async() => {
        navigation.navigate('Login');
    }});
  }

  const goToScreen = async (type) => {
    const token = await AsyncStorage.getItem('token');
    if (token != '0') {
      // loggedIn
      navigation.navigate(type);
    } else {
      // not loggedIn
      navigation.navigate('Login', {type});
    }
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Cultura Sustentable</Text>
      <View style={styles.wavesContainer}>
        <ImageBackground
          source={Waves}
          style={styles.waves}
          resizeMode="stretch">
          <View style={styles.buttons}>
            <Text style={styles.choose}>Seleccionar rol</Text>
            <TouchableWithoutFeedback onPress={() => goToScreen('Citizen Map')}>
              <Button1
                height={height * 0.22}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            {isEmployee && (
              <TouchableWithoutFeedback
                onPress={() => goToScreen('Employee Map')}>
                <Button2
                  height={height * 0.22}
                  style={styles.button}
                  resizeMode="contain"
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </ImageBackground>
        <View style={styles.storeButton}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Store')}>
            <StoreButton resizeMode="contain" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.closeSessionButton}>
          <TouchableOpacity
            onPress={() => handleLogout()}>
            <CerrarSesion resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.thanksButton}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Thanks')}>
            <ThanksButton resizeMode="contain" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width,
    height,
  },
  title: {
    fontSize: moderateScale(32),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    marginTop: height * 0.1,
    color: '#65B98F',
  },
  wavesContainer: {
    marginTop: height * 0.08,
  },
  waves: {
    width,
  },
  dialOne: {
    alignSelf: 'flex-end',
    height: height * 0.12,
  },
  choose: {
    fontSize: moderateScale(28),
    marginTop: height * 0.05,
    marginBottom: height * 0.01,

    color: '#fff',
    fontFamily: 'Nunito-Regular',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    width,
    height: '100%',
    marginTop: height * 0.07,
  },
  button: {
    marginTop: height * 0.02,
  },
  storeButton: {
    position: 'absolute',
    bottom: height * 0.27,
    left: width * 0.05,
    zIndex: 100,
  },
  thanksButton: {
    position: 'absolute',
    bottom: height * 0.27,
    right: width * 0.05,
    zIndex: 100,
  },
  closeSessionButton: {
    position: 'absolute',
    bottom: height * 0.29,
    left: width * 0.33,
    zIndex: 100,
  },
});

export default Home;
