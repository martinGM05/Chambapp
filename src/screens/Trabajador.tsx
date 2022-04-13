import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import CarouselTrabajador from '../components/Trabajador/CarouselTrabajador';
import BackButton from '../components/BackButton';
import HeaderTrabajador from '../components/Trabajador/HeaderTrabajador';
import Feedback from '../components/Trabajador/Feedback';
import { PropsComments } from '../components/Trabajador/Comments';

interface CarouselItems {
  image: string;
}

type Props = StackScreenProps<RootStackParams, 'Trabajador'>;
const dimensions = Dimensions.get('window');

const Trabajador = ({ navigation }: Props) => {

  let trades = ['Carpintero', 'Electricista', 'Pintor', 'Programador']
  let carousel = [
    'https://zonaherramientas.com/wp-content/uploads/2019/11/PIntar-puertas-en-blanco.jpg',
    'https://i.ytimg.com/vi/C9S8SQ1cMs4/maxresdefault.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_616002-MLM44786252754_022021-O.jpg'
  ]
  let customersComments = [
    {
      name: 'Nicolas',
      photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Chino',
      photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.containerTrabajador}>
        <CarouselTrabajador carousel={carousel} />
      </View>
      <View style={styles.containerDescription}>
        <HeaderTrabajador 
          trades={trades} 
          name="Ivan Codova Garcia" 
          rating={3}
          photo={'https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/13124498_564419103736515_8441589850958257049_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGFFdfsrzU58rDTAeENP8yvTmtrnylvN9ROa2ufKW831GxwlhgTdgYE1ocdgvrua0GyOo2wrI5ChShLtIgig6bc&_nc_ohc=3MSeyusOw8cAX8h_j_O&tn=bXDatg3hCWu9IXUH&_nc_ht=scontent.fjal2-1.fna&oh=00_AT947MGSU1NguaNmPShRKs29EjVgxxbpo9s6T30lfHLcvQ&oe=627D084F'}
        />
        <Feedback customerList={customersComments} />
      </View>
    </View>
  )
}

export default Trabajador

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTrabajador: {
    height: '93%'
  },
  containerDescription: {
    width: '100%',
    height: dimensions.height,
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    top: '33%',
    left: 0,
    zIndex: 1,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.56,
    shadowRadius: 13.98,
    elevation: 32,
  }, 
  
})