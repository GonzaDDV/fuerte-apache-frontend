import React, {useState, useRef, useEffect} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import {width, height, moderateScale} from '../../functions/ResponsiveFontSize';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SuccessImage from '../../assets/images/waste-2.svg';
import AccountButton from './AccountButton';

const Popup = (props) => {
  const [isTrue, setIsTrue] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => props.close());
  };

  useEffect(() => {
    if (isTrue) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [isTrue]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setIsTrue(false)}>
        <Animated.View
          style={[
            styles.background,
            {
              opacity: fadeAnim,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.popup,
          {
            transform: [{scale: fadeAnim}],
          },
        ]}>
        {!props.error &&
          (props.icon ? (
            <FontAwesome
              name={props.icon}
              size={moderateScale(100)}
              color="#3AC924"
              style={styles.icon}
            />
          ) : (
            <SuccessImage
              height={height * 0.2}
              style={styles.image}
              resizeMode="contain"
            />
          ))}
        <Text style={[styles.text, props.error && styles.errorText]}>
          {props.text}
        </Text>
        <View style={{width: '100%', marginTop: 10}}>
          <AccountButton text="Confirmar" onPress={() => setIsTrue(false)} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  popup: {
    position: 'absolute',
    padding: moderateScale(40),
    paddingHorizontal: moderateScale(30),
    backgroundColor: '#fff',
    zIndex: 100,
    alignItems: 'center',
    borderRadius: 20,
    maxWidth: width * 0.9,
  },
  icon: {
    marginBottom: 10,
  },
  image: {
    marginBottom: 12,
    height: height * 0.2,
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(24),
    marginTop: 6,
    color: '#65B98F',
  },
  errorText: {
    color: '#e9545c',
  },
});

export default Popup;
