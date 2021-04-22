import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../functions/ResponsiveFontSize';

const Thanks = () => {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{alignItems: 'center'}}>
      <Text style={styles.title}>Agradecimientos</Text>
      <Text style={styles.text}>
        Queremos agradecer a todas las personas y organizaciones involucradas
        que lograron que este proyecto se lleve a cabo.
      </Text>
      <View style={styles.logos}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/COAFI.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/CoCoS.png')}
            resizeMode="contain"
          />
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
  },
  text: {
    marginTop: height * 0.02,
    fontSize: moderateScale(18),
    lineHeight: moderateScale(24),
    color: '#fff',
    
  },
  logos: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.1,
  },
  logo: {
    width: width * 0.37,
    height: width * 0.37,
    marginVertical: width * 0.03,
    backgroundColor: '#fff',
    borderRadius: width * 0.2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: moderateScale(20),
  },
  logoImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Thanks;
