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
        <FontAwesome
          name={props.icon}
          size={moderateScale(100)}
          color="#3AC924"
          style={styles.icon}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#fff',
    zIndex: 100,
    alignItems: 'center',
    borderRadius: 20,
    maxWidth: width * 0.9,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(32),
  },
  text: {
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginTop: 6,
    color: '#303030',
  },
});

export default Popup;
