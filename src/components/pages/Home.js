import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';

import Waves from '../../assets/images/waves-1.png';
import Button1 from '../../assets/images/button-1.svg';
import Button2 from '../../assets/images/button-2.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {useStoreActions} from 'easy-peasy';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const resetState = useStoreActions((actions) => actions.resetState);

  useFocusEffect(() => {
    resetState();
  }, []);

  const goToScreen = async (type) => {
    const isLoggedIn = await AsyncStorage.getItem('loggedIn');
    if (isLoggedIn) {
      // loggedIn
      navigation.navigate(type);
    } else {
      // not loggedIn
      navigation.navigate('Register', {type});
    }
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Cultura Sustentable</Text>
      <View style={styles.wavesContainer}>
        <Image source={Waves} style={styles.waves} resizeMode="stretch" />
        <View style={styles.buttons}>
          <Text style={styles.choose}>Seleccionar rol</Text>
          <TouchableWithoutFeedback onPress={() => goToScreen('Citizen Map')}>
            <Button1
              //source={Button1}
              height={height * 0.2}
              style={styles.button}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => goToScreen('Employee Map')}>
            <Button2
              //source={Button2}
              height={height * 0.2}
              style={styles.button}
              resizeMode="contain"
            />
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
    justifyContent: 'center',
    position: 'absolute',
    width,
    marginTop: height * 0.07,
  },
  button: {
    marginTop: height * 0.033,
  },
});

export default Home;
