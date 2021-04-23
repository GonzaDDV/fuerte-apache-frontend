import React from 'react';
import {Image} from 'react-native';
import { Linking } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {width, height, moderateScale} from '../../../functions/ResponsiveFontSize';
import ProductCard from './ProductCard'

const Store = () => {
    return(
        <ScrollView
          style={styles.mainContainer}
          contentContainerStyle={{alignItems: 'center'}}>
            
            <Text style={styles.title}>Tienda Sustentable</Text>


            <View style={styles.productsContainer}>
                <Image 
                  source={require('../../../assets/images/sponsors/arabica.jpg')}
                  style={styles.storeLogo}
                />
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

                <Text style={styles.subtitle}>Granos de café</Text>
                <View style={styles.productsRow}>
                    <ProductCard path={require('../../../assets/images/products/granos1.jpg')}/>
                    <ProductCard path={require('../../../assets/images/products/granos2.jpg')}/>
                </View>
                <View style={styles.productsRow}>
                    <ProductCard path={require('../../../assets/images/products/granos3.jpg')}/>
                    <ProductCard path={require('../../../assets/images/products/granos4.jpg')}/>
                </View>

                <Text style={styles.subtitle}>Comprar</Text>
                <View style={styles.contactContainer}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5491131591904')}>
                        <View style={[styles.contactCard, styles.wppCard]}>
                            <Image
                            source={require('../../../assets/images/wpp-logo.png')}
                            style={styles.contactImage}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/arabicca.coffee/')}>
                        <View style={[styles.contactCard, styles.gmailCard]}>
                            <Image
                              source={require('../../../assets/images/instagram.png')}
                              style={styles.contactImage}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>


      </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
      width,
      backgroundColor: '#6EB38E',
      paddingTop: width * 0.1,
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
        color: 'white',
        marginTop: '5%',
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
        paddingBottom: width * 0.2,
        marginTop: '10%',

    },
    productsRow: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: '5%',
    },
    marcaName: {
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
    },
    storeLogo: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: 200,
        alignSelf: 'center',
    },
    contactContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
        flexDirection: 'row'
    },
    contactCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.3,
        height: width * 0.2,
        borderRadius: 15,
        marginLeft: '2%',
        marginRight: '2%',
    },
    contactImage: {
        width: moderateScale(50),
        height: moderateScale(50),
    },
    wppCard: {
        backgroundColor: '#1BD741',
    },
    gmailCard: {
        backgroundColor: '#fff',
    }
})
export default Store;