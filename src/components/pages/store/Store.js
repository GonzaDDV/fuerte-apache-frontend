import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';

import ProductCard from './ProductCard'

const Store = () => {
    return(
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            
            <Text style={styles.title}>Tienda Sustentable</Text>
            <View style={styles.marca}>
                <Text style={styles.marcaName}> Arabica </Text>
            </View>

            <View style={styles.productsContainer}>
                <Text style={styles.subtitle}>Jabones de café</Text>
                <View style={styles.productsRow}>
                    <ProductCard path={require('../../../assets/images/products/producto1.jpeg')}/>
                    <ProductCard path={require('../../../assets/images/products/producto2.jpeg')}/>
                    <ProductCard path={require('../../../assets/images/products/producto3.jpeg')}/>
                </View>
                <View style={styles.productsRow}>
                    <ProductCard path={require('../../../assets/images/products/producto4.jpeg')}/>
                    <ProductCard path={require('../../../assets/images/products/producto5.jpeg')}/>
                    <ProductCard path={require('../../../assets/images/products/producto6.jpeg')}/>
                </View>
            </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      width,
      backgroundColor: '#6EB38E',
      paddingTop: width * 0.1
      //paddingHorizontal: width * 0.1,
    },
    title: {
        fontSize: moderateScale(36),
        color: '#fff',
        fontFamily: 'Nunito-Bold',
    },
    subtitle: {
        fontSize: moderateScale(20),
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        marginBottom: '-5%'
    },
    marca: {
        width: '20%',
        backgroundColor: '#ABD8C1',
        alignSelf: 'flex-start',
        display: 'flex',
        paddingVertical: width * 0.01,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: '15%',
        height: moderateScale(30),
    },
    productsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ABD8C1',
        width: '100%',
        paddingHorizontal: width * 0.05,
        paddingTop: width * 0.03,
        paddingBottom: width * 0.1,
    },
    productsRow: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: '10%',
    },
    marcaName: {
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
    },
});

export default Store;