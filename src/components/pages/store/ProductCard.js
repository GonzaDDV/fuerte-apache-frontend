import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

const ProductCard = ({path}) => {
    return (
        <View style={styles.productContainer}>
            <View style={styles.card}>
                <Image 
                    style={styles.image}
                    source={path}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        display: 'flex',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    card: {
      backgroundColor: 'white',
      width: '100%',
      display: 'flex',
      paddingVertical: moderateScale(5),
      paddingHorizontal: moderateScale(5),
      borderRadius: 10,
      marginTop: '8%',
      marginBottom: '3%',
    },
    image: {
      width: '100%',
      height: moderateScale(74),
    },
    name: {
        fontFamily: 'Nunito-Bold',
    }
});

export default ProductCard