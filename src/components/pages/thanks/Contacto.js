import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

const Contacto = (props) => {
  return (
    <View style={styles.card}>
        <Text style={styles.title}>¡Contactanos!</Text>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/stem.it/')}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/instagram.png')}
                    resizeMode="contain"
                    onPress
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/proy-stem-it')}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/linkedin.png')}
                    resizeMode="contain"
                    onPress
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:contacto.stemit@gmail.com')}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/gmail.png')}
                    resizeMode="contain"
                    onPress
                />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: moderateScale(13),
    paddingBottom: moderateScale(15),
    padding: moderateScale(15),
    borderRadius: 10,
    marginTop: '3%',
    marginBottom: '15%',
  },
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },    
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(20),
    marginBottom: '5%',
  },       
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginBottom: '5%',
  },
});

export default Contacto;
