import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';
import CarouselTrabajador from '../components/Trabajador/CarouselTrabajador';
import BackButton from '../components/BackButton';
import HeaderTrabajador from '../components/Trabajador/HeaderTrabajador';
import Feedback from '../components/Trabajador/Feedback';
import { PropsComments } from '../components/Trabajador/Comments';
import { Contexto, IComentario } from '../utils/PeticionesProvider';
import { ITrabajador } from './Principal';
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';

interface CarouselItems {
  image: string;
}

type Props = StackScreenProps<RootStackParams, 'Trabajador'>;
const dimensions = Dimensions.get('window');

const Trabajador = ({ navigation, route }: Props) => {
  const contexto = useContext(Contexto);

  const { id } = route.params
  const params = route.params;
  const [comentario, setComentario] = useState<IComentario[]>([])
  const [foto, setFoto] = useState<string[]>([])


  useEffect(() => {
    function GetTrabajadoresComentarios() {
      
      const suscriber = firestore().collection('Trabajadores').doc(id).collection('Comentarios')
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(doc => {
            const comentario = doc.data() as IComentario;
            comentario.Id = doc.id;
            comentario.IdTrabajador = id
            return comentario;
          })
          
          data.map(e=>{
            setFoto([...foto,e.fotosComentario])
          })
        
          setComentario(data)  
          return () => suscriber();
        })
    }
  
    GetTrabajadoresComentarios()


  }
  
  , [])

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
  const a = contexto.Trabajador.filter(e => e.Id == id)

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.containerTrabajador}>
        <CarouselTrabajador carousel={foto} />
      </View>
      <View style={styles.containerDescription}>
        {
          a.map((e, index) => (

            <HeaderTrabajador
              key={index}
              trades={e.Oficios}
              name={e.nombre}
              rating={e.valoracion}
              photo={e.fotoUser}
            />
          ))}
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