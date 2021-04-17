import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

const StemitCard = () => {
  return (
    <View style={styles.card}>
        <View style={styles.head}>
            <Image
                style={styles.logoImage}
                source={require('../../../assets/images/stemitLiso.png')}
                resizeMode="contain"
            />
        </View>
        <View style={styles.desc}>
            <Text style={styles.title}>¿Que es Stem It?</Text>
            <Text style={{fontFamily: 'Nunito-Regular'}}>
            Acercamos a jóvenes desarrolladores al mundo laboral mediante experiencia de 
            voluntariado en proyectos solidarios, consolidando sus conocimientos mientras ayudamos a los que más lo necesitan.
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: moderateScale(13),
    paddingBottom: moderateScale(15),
    borderRadius: 10,
    marginTop: '8%',
    marginBottom: '8%',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(16),
    marginBottom: '5%',
  },    
  desc: {
    width: '65%',
    display: 'flex',
    fontFamily: 'Nunito-Regular',
  },
  head: {
    width: '35%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10)
  },
  logoImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 180,
  },
});

export default StemitCard;
