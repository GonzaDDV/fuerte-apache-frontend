import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {moderateScale, height, width} from '../../functions/ResponsiveFontSize';

import Waves from '../../assets/images/waves-1.png';
import Dial1 from '../../assets/images/dial-1.png';
import Button1 from '../../assets/images/button-1.png';
import Button2 from '../../assets/images/button-2.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Cultura Sustentable</Text>
      <View style={styles.wavesContainer}>
        <Image source={Waves} style={styles.waves} resizeMode="stretch" />
        <View style={styles.buttons}>
          <Image source={Dial1} style={styles.dialOne} resizeMode="contain" />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login', {type: 'Citizen Map'})}>
            <Image
              source={Button1}
              style={styles.button}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Login', {type: 'Employee Map'})
            }>
            <Image
              source={Button2}
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
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width,
    marginTop: height * 0.07,
  },
  button: {
    height: height * 0.19,
    marginTop: height * 0.03,
  },
});

export default Home;
