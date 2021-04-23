import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

import StemitCard from './StemitCard'
import DevCard from './DevCard'
import Contacto from './Contacto'

const Thanks = () => {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{alignItems: 'center'}}>
      
      <Text style={styles.title}>Agradecimientos</Text>
      <Text style={styles.text}>Esta aplicación fue desarrollada por voluntarios parte de la organización Stem It</Text>
      <StemitCard />

      <Text style={styles.subtitle}>Nuestro Equipo</Text>
      <View style={styles.devContainer}>
        <DevCard 
          name='Angelina Fantauzzo'
          job='Maps & APIs Developer'
          img={require('../../../assets/images/devs/angie.jpeg')}
        />
        <DevCard 
          name='Mateo Benitez'
          job='UI/UX Designer'
          img={require('../../../assets/images/devs/faceDefault.jpg')}
        />
        <DevCard 
          name='Brenda Fleischer'
          job='Backend Developer'
          img={require('../../../assets/images/devs/brenda.jpeg')}
        />
        <DevCard 
          name='Gonzalo Diaz'
          job='Frontend Developer'
          img={require('../../../assets/images/devs/gonza.jpeg')}
        />
        <DevCard 
          name='Flor Villaverde'
          job='Project Manager'
          img={require('../../../assets/images/devs/flor.jpeg')}
        />
        <DevCard 
          name='Lisandro Acuña'
          job='Product Owner'
          img={require('../../../assets/images/devs/lichu.jpeg')}
        />
        <DevCard 
          name='Joaquin Polonuer'
          job='Senior Developer'
          img={require('../../../assets/images/devs/polo.jpg')}
        />
        <DevCard 
          name='Luca Jaichenco'
          job='Stem It Founder'
          img={require('../../../assets/images/devs/luca.jpeg')}
        />
        <DevCard 
          name='Antonella Macoretta'
          job='Stem It Founder'
          img={require('../../../assets/images/devs/anto.jpeg')}
        />
      </View>
      
      <Contacto />


      <Text style={styles.subtitle}>Nos Apoyan</Text>
      <Text style={styles.text}>
        Queremos agradecer a todas las personas y organizaciones involucradas
        que lograron que este proyecto se lleve a cabo.
      </Text>
      <View style={styles.logos}>
        <View style={styles.logoRow}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/COAFI.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/CoCoS.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/sponsors/santander.jpg')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.logoRow}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/sponsors/arabica.jpg')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/sponsors/asociar.jpg')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/sponsors/proyectar.jpeg')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.logoRow}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/sponsors/elepants.jpeg')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    backgroundColor: '#6EB38E',
    padding: width * 0.1,
    //paddingHorizontal: width * 0.1,
  },
  title: {
    fontSize: moderateScale(36),
    color: '#fff',
    fontFamily: 'Nunito-Bold',
  },
  subtitle: {
    fontSize: moderateScale(30),
    color: '#fff',
    fontFamily: 'Nunito-Bold',
  },
  text: {
    marginTop: height * 0.02,
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#fff',
    fontFamily: 'Nunito-Regular',
  },
  logos: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.2,
  },
  logo: {
    width: moderateScale(85),
    height: moderateScale(85),
    marginVertical: width * 0.03,
    backgroundColor: '#fff',
    borderRadius: 200,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: moderateScale(20),
  },
  logoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },  
  logoImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    position: 'absolute',
  },
  devContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '8%',
    marginBottom: '8%',
  }
});

export default Thanks;
