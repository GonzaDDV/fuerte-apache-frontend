import React from 'react';
import {ScrollView, View, ImageBackground, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Input from '../../global/Input';
import Waves from '../../../assets/images/waves-2.png';
import AccountButton from '../../global/AccountButton';
import styles from './styles';
import {useStoreActions, useStoreState} from 'easy-peasy';
import ErrorMessage from '../../global/ErrorMessage';

const Register = ({route, navigation}) => {
  const register = useStoreActions((actions) => actions.register);
  const error = useStoreState((state) => state.account.error);
  const {type} = route.params;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    const dataToSend = {...data, tipo_usuario: 'ciudadano'};
    register({
      data: dataToSend,
      callback: () => navigation.navigate('Login', {type}),
    });
  };

  return (
    <ScrollView>
      <ImageBackground source={Waves} style={styles.waves} resizeMode="stretch">
        <Text style={styles.title}>Registrarse</Text>
      </ImageBackground>
      <View style={styles.inputs}>
        <ErrorMessage error={error} />
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Nombre"
              icon="account-circle"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.nombre}
            />
          )}
          name="nombre"
          rules={{required: true}}
          defaultValue=""
        />
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Apellido"
              icon="account-circle"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.apellido}
            />
          )}
          name="apellido"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Teléfono"
              icon="phone"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.email}
            />
          )}
          name="telefono"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="DNI"
              icon="assignment-ind"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.dni}
            />
          )}
          name="dni"
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
