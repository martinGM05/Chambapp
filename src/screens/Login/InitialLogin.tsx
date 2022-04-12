import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import SocialMedia from '../../components/Login/SocialMedia';

type Props = StackScreenProps<RootStackParams, 'Principal'>;

const InitialLogin = ({ navigation }: Props) => {



  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../img/Login/login-logo.png')} style={styles.logo} />
      </View>
      <View style={styles.containerDescription}>
        <View>
          <Text style={styles.h1}>Inserte logo aquí</Text>
          <Text style={styles.textDescription}>Bienvenido, nosotros te ayudamos a resolver tus problemas</Text>
        </View>
        <View style={styles.containerButtons}>
          <Pressable
            style={[styles.button, styles.buttonLogin]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textButtonLogin}>Iniciar sesión</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonRegister]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.textButtonRegister}>Registrarse</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerSocial}>
        <Text style={styles.textDescriptionSocial}>O inicia con una red social</Text>
        <SocialMedia />
      </View>
    </View>
  )
}

export default InitialLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerDescription: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: -20,
    marginBottom: 20,
  },
  textDescription: {
    fontSize: 20,
    textAlign: 'center',
    color: '#474747',
  },
  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  button: {
    width: '45%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonLogin: {
    backgroundColor: '#3f51b5',
  },
  buttonRegister: {
    backgroundColor: '#fff',
  },
  textButtonLogin: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  textButtonRegister: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  containerSocial: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDescriptionSocial:{
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: -30,
    marginBottom: 20,
  },
})