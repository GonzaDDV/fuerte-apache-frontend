import React from 'react';
import {ScrollView, View, ImageBackground, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Input from '../../global/Input';
import Waves from '../../../assets/images/waves-2.png';
import AccountButton from '../../global/AccountButton';
import styles from './styles';

const Login = ({route, navigation}) => {
  const {type} = route.params;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    // login y pasar al mapa
    navigation.navigate(type);
  };

  return (
    <ScrollView>
      <ImageBackground source={Waves} style={styles.waves} resizeMode="stretch">
        <Text style={styles.title}>Iniciar sesión</Text>
      </ImageBackground>
      <View style={styles.inputs}>
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
          rules={{required: true}}
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
          rules={{required: true}}
          defaultValue=""
        />

        <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
        <AccountButton text="Iniciar sesión" onPress={handleSubmit(onSubmit)} />
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccount}>¿No tienes cuenta?</Text>
          <Text
            style={styles.noAccountButton}
            onPress={() => navigation.navigate('Register', {type})}>
            Registrarse
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
