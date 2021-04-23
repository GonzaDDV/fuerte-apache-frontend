import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

const DevCard = (props) => {
  return (
    <View style={styles.card}>
        <Image
            style={styles.image}
            source={props.img}
            resizeMode="contain"
        />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.job}>{props.job}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: moderateScale(13),
    paddingBottom: moderateScale(15),
    padding: moderateScale(15),
    borderRadius: 10,
    marginTop: '3%',
    marginBottom: '3%',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(11),
    marginBottom: '5%',
  },
  job: {
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(10),
  },        
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: 180,
    marginBottom: '5%',
  },
});

export default DevCard;
