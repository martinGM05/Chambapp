import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import CarouselTrabajador from '../components/Trabajador/CarouselTrabajador';
import BackButton from '../components/BackButton';
import HeaderTrabajador from '../components/Trabajador/HeaderTrabajador';
import Feedback from '../components/Trabajador/Feedback';
import { PropsComments } from '../components/Trabajador/Comments';
import { Contexto, IComentario, IUsuario } from '../utils/PeticionesProvider';
import { ITrabajador } from './Principal';
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';

interface CarouselItems {
  image: string;
}



type Props = StackScreenProps<RootStackParams, 'Trabajador'>;
const dimensions = Dimensions.get('window');
const Trabajador = ({ navigation, route }: Props) => {
  
  const { id } = route.params
  const contexto = useContext(Contexto);
  
  const{averageRating}=useContext(Contexto)

  const{listaImagenes}=useContext(Contexto)
  const{comentario}=useContext(Contexto)

  
  const params = route.params;
 

  useEffect(() => {

    contexto.GetTrabajadoresComentarios(id)
    
  }, [])

  const a = contexto.Trabajador.filter(e => e.Id == id)

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.containerTrabajador}>
        <CarouselTrabajador carousel={listaImagenes} />
      </View>
      <View style={styles.containerDescription}>
        {
          a.map((e, index) => (

            <HeaderTrabajador
              key={index}
              trades={e.Oficios}
              name={e.nombre}
              rating={averageRating}
              photo={e.fotoUser}
            />
          ))}
        <Feedback customerList={comentario} />
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