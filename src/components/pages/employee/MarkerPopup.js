import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import {
  height,
  moderateScale,
  width,
} from '../../../functions/ResponsiveFontSize';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.numbers}>
          {this.props.trash && (
            <View
              style={[styles.cardNumberContainer, {borderColor: '#A67E74'}]}>
              <Text style={[styles.cardNumber, {color: '#A67E74'}]}>
                {this.props.trash.number}
              </Text>
              <Text style={[styles.cardNumberText, {color: '#A67E74'}]}>
                {this.props.trash.label}
              </Text>
            </View>
          )}
          {this.props.recycle && (
            <View
              style={[styles.cardNumberContainer, {borderColor: '#65B98F'}]}>
              <Text style={[styles.cardNumber, {color: '#65B98F'}]}>
                {this.props.recycle.number}
              </Text>
              <Text style={[styles.cardNumberText, {color: '#65B98F'}]}>
                {this.props.recycle.label}
              </Text>
            </View>
          )}
          {this.props.special && (
            <View
              style={[styles.cardNumberContainer, {borderColor: '#3F5C6C'}]}>
              <Text style={[styles.cardNumber, {color: '#3F5C6C'}]}>
                {this.props.special.number}
              </Text>
              <Text style={[styles.cardNumberText, {color: '#3F5C6C'}]}>
                {this.props.special.label}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.address}>{this.props.address}</Text>
        </View>
      </View>
    );
  }
}

export default (props) => {
  const handleYup = (card) => {
    console.log(`Yup for ${card.text}`);
    props.close();
  };
  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`);
    props.close();
  };

  return (
    <View style={styles.background}>
      <SwipeCards
        cards={props.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        handleYup={handleYup}
        handleNope={handleNope}
        yupText="Recolectar"
        nopeText="Rechazar"
        containerStyle={{position: 'absolute'}}
        yupStyle={{
          marginRight: width * 0.1,
          padding: 10,
          backgroundColor: '#65B98F',
          borderWidth: 0,
          position: 'absolute',
          bottom: height * 0.12,
        }}
        nopeStyle={{
          marginLeft: width * 0.1,
          padding: 10,
          backgroundColor: '#e9545c',
          borderWidth: 0,
          position: 'absolute',
          bottom: height * 0.12,
        }}
        yupTextStyle={{
          fontSize: moderateScale(20),
          color: '#fff',
        }}
        nopeTextStyle={{
          color: '#fff',
          fontSize: moderateScale(20),
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width,
    height,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 6,
  },
  numbers: {
    paddingVertical: height * 0.05,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: moderateScale(10),
  },
  cardNumberContainer: {
    backgroundColor: '#fff',
    width: width * 0.3,
    height: width * 0.3,
    margin: moderateScale(5),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    elevation: 6,
  },
  cardNumber: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(36),
  },
  cardNumberText: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  bottomCard: {
    backgroundColor: '#65B98F',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: moderateScale(14),
  },
  name: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(28),
  },
  address: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(16),
  },
  noMoreCardsText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 22,
  },
});
