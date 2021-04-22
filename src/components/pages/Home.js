import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import jwtoken from 'react-native-pure-jwt';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';
import {useStoreActions, useStoreState} from 'easy-peasy';

import Waves from '../../assets/images/waves-1.png';
import Button1 from '../../assets/images/button-1.svg';
import Button2 from '../../assets/images/button-2.svg';
import ThanksButton from '../../assets/images/thanks-button.svg';
import LogOut from '../../assets/images/log-out.svg';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {decode} from 'base-64';
import {ImageBackground} from 'react-native';

const Home = ({navigation}) => {
  const resetState = useStoreActions((actions) => actions.resetState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const logout = useStoreActions((actions) => actions.logout);

  useFocusEffect(async () => {
    resetState();

    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      const payload = JSON.parse(decode(token.split('.')[1]));
      const tipoUsuario = payload.result.tipo_usuario;
      setIsEmployee(tipoUsuario === 'recolector');
    };
    getToken();
  }, []);

  const goToScreen = async (type) => {
    let isLoggedIn = await AsyncStorage.getItem('token');
    if (isLoggedIn) {
      // loggedIn
      navigation.navigate(type);
    } else {

      // not loggedIn
      navigation.navigate('Register', {type});
    }
  };

  const handleLogout = async () => {
    try {
      logout(); 
      setIsLoggedIn(true);  
  } 
    catch (e) {
      throw e
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
              <View style={styles.thanksButton}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Thanks')}>
                  <ThanksButton resizeMode="contain" />
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.logoutButton}>
                <TouchableWithoutFeedback
                  onPress={() => handleLogout()}>
                  <LogOut resizeMode="contain" />
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
  thanksButton: {
    position: 'absolute',
    bottom: height * 0.3,
    right: width * 0.05,
    zIndex: 100,
  },
  logoutButton: {
    position: 'absolute',
    bottom: height * 0.32,
    left: width * 0.05,
    zIndex: 100,
  },
});

export default Home;
