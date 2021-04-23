import React, {useEffect} from 'react';
import {ScrollView, View, ImageBackground, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Input from '../../global/Input';
import Waves from '../../../assets/images/waves-2.png';
import AccountButton from '../../global/AccountButton';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {url} from '../../../functions/constants';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {moderateScale} from '../../../functions/ResponsiveFontSize';
import ErrorMessage from '../../global/ErrorMessage';

const Login = ({route, navigation}) => {
  const login = useStoreActions((actions) => actions.login);
  const error = useStoreState((state) => state.account.error);

  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = async (data) => {
    login({
      data,
      callback: () => {
        navigation.navigate('Home');
      },
    });
  };

  return (
    <ScrollView>
      <ImageBackground source={Waves} style={styles.waves} resizeMode="stretch">
        <Text style={styles.title}>Iniciar sesión</Text>
      </ImageBackground>
      <View style={styles.inputs}>
        <ErrorMessage error={error} />
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Email"
              icon="email"
              type="email-address"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.email}
            />
          )}
          name="email"
          rules={{
            required: {
              value: true,
              message: 'Por favor, ingrese un correo electrónico válido',
            },
            pattern: {
              value: emailRegex,
              message: 'Por favor, ingrese un correo electrónico válido',
            },
          }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Contraseña"
              icon="vpn-key"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.password}
              pass={true}
            />
          )}
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Por favor, ingrese una contraseña',
            },
          }}
          defaultValue=""
        />

        {/* <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text> */}
        <AccountButton text="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccount}>¿No tienes cuenta?</Text>
          <Text
            style={styles.noAccountButton}
            onPress={() => navigation.navigate('Register')}>
            Registrarse
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
