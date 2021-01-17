import React from 'react';
import {ScrollView, View, ImageBackground, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Input from '../../global/Input';
import Waves from '../../../assets/images/waves-2.png';
import AccountButton from '../../global/AccountButton';
import styles from './styles';

const Register = ({route, navigation}) => {
  const {type} = route.params;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    // login y pasar al mapa
    navigation.navigate(type);
  };

  return (
    <ScrollView>
      <ImageBackground source={Waves} style={styles.waves} resizeMode="stretch">
        <Text style={styles.title}>Registrarse</Text>
      </ImageBackground>
      <View style={styles.inputs}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Nombre"
              icon="account-circle"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.name}
            />
          )}
          name="name"
          rules={{required: true}}
          defaultValue=""
        />

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
              pass={true}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.password}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />

        <AccountButton text="Registrarse" onPress={handleSubmit(onSubmit)} />
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccount}>¿Ya tienes cuenta?</Text>
          <Text
            style={styles.noAccountButton}
            onPress={() => navigation.navigate('Login', {type})}>
            Iniciar sesión
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
