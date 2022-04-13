import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import CarouselTrabajador from '../components/Trabajador/CarouselTrabajador';
import BackButton from '../components/BackButton';
import HeaderTrabajador from '../components/Trabajador/HeaderTrabajador';
import Feedback from '../components/Trabajador/Feedback';

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


  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.containerTrabajador}>
        <CarouselTrabajador carousel={carousel} />
      </View>
      <View style={styles.containerDescription}>
        <HeaderTrabajador trades={trades} />
        <Feedback />
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