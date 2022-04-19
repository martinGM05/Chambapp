import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import SocialMedia from '../../components/Login/SocialMedia';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FormLogin from '../../components/Login/FormLogin';
import useLogin from '../../hooks/useLogin';

type Props = StackScreenProps<RootStackParams, 'Login'>;

const InitialLogin = ({ navigation }: Props) => {

  const { getIdStorage, active } = useLogin()
  
  useEffect(() => {
    setTimeout(()=> {
      getIdStorage(navigation)
    }, 1000)
  }, [])

  return (
    <LinearGradient
      colors={['#00C9FF', '#fff']}
      start={{ x: 2, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.1, 0.9]}
      style={styles.container}
    >
      {
        active === 3 ? (
          <ScrollView style={styles.scroll}>
            <View style={styles.containerTitle}>
              <Text style={styles.title1}>Bienvenido</Text>
              <Text style={styles.title2}>Ingresa con tu cuenta</Text>
            </View>
            <View style={styles.containerForm}>
              <FormLogin navigation={navigation} />
            </View>
            <View style={styles.containerSocial}>
              <SocialMedia navigation={navigation} />
            </View>
            <View style={styles.containerRegister}>
              <Text style={styles.text}>¿No tienes una cuenta?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.text2}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator 
            size="large" 
            color="#1c4a4d" 
            style={styles.activityIndicator}
          />
        )
      }

    </LinearGradient>
  )
}

export default InitialLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  scroll: {
    width: '100%',
    // backgroundColor: 'blue',
    height: '100%',
  },
  containerRegister: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
    marginTop: 50,
  },
  text2: {
    fontSize: 16,
    color: '#095397',
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  containerTitle: {
    width: '100%',
    height: '5%',
    marginTop: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#095397',
  },
  title2: {
    fontSize: 20,
    color: '#7e7b6d',
  },
  containerForm: {
    width: '100%',
    height: 'auto',
    marginTop: '10%',
    // borderTopWidth: 1,
    // backgroundColor: 'red',
    // marginTop: '5%',
  },
  form: {
    // width: 100,
    marginLeft: '5%',
    marginRight: '5%',
    paddingBottom: '5%',
    height: 'auto',
    // borderWidth: 1,
    // backgroundColor: 'blue',
  },
  inputSyle: {
    height: 50,
    marginLeft: '1%',
    marginRight: '1%',
    paddingRight: '5%',
    marginTop: '2%',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: '#000',
    fontSize: 16,
    marginLeft: '1%',
  },
  icon: {
    color: '#095397',
    fontSize: 25,
  },
  contenedorError: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  error: {
    color: '#ff0000',
    fontSize: 12,
    marginLeft: 5,
  },
  containerInput: {
    height: 'auto',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    // borderWidth: 2,
  },
  titleInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '2%',
  },
  containerLogin: {
    left: Dimensions.get('window').width / 2 - 100,
    width: '50%',
    height: 50,
    marginTop: '4%',
    backgroundColor: '#095397',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerSocial: {
    marginTop: '5%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})