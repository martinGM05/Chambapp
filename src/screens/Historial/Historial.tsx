import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardTrades from '../../components/Principal/CardTrades';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';
import { IHistorial, ITrabajador } from '../../interfaces/Peticiones';
import { Contexto } from '../../context/Data/PeticionesProvider';
import { SesionContext } from '../../context/Sesion/SesionContext';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;
const Historial = ({ navigation }:Props) => {
    const {Trabajador}=useContext(Contexto)
    const [TrabajadorHistorial, setTrabajadorHistorial] = useState<ITrabajador[]>([])
    const [Historial, setHistorial] = useState<IHistorial[]>([])
    const { Sesion } = useContext(SesionContext)
    let trabajador = [
        {
            trade: 'Carpinteria',
            user: 'Juan Perez',
            rating: 3,
            photoBanner: "https://img.freepik.com/foto-gratis/carpintero-que-trabaja-equipo-tabla-madera-tienda-carpinteria_1418-2326.jpg",
            photoUser: "https://imagenes.elpais.com/resizer/QmMhOvp7m87srTdvFwJQtKs0fbI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TNHLMTC2IVDHZAHOTIPQ66YI7Y.jpg"
        },
        {
            trade: 'Prostituacion',
            user: 'Ivan Cordova',
            rating: 5,
            photoBanner: "https://imagenes.elpais.com/resizer/a16w8ewVLcMDbAkxyfxg54js6Y0=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VJJHJ4RQ2QOKV66ML43ABGIIKA.jpg",
            photoUser: "https://scontent.fjal2-1.fna.fbcdn.net/v/t1.18169-9/12376279_506023649576061_8346130321154427894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEr-MWK6uMfVDwP3PslUunDo39o5K2_i-qjf2jkrb-L6m5RLSkD_Ci7L9ONf9JDdnHEWZGxocxVIryBWX39D6aM&_nc_ohc=G1lL-th4ASoAX-gBz5S&_nc_ht=scontent.fjal2-1.fna&oh=00_AT9xu4Z-fgGWpUBBGlXLojEIXT6-Hxsuy2Mhx2OGtevdVA&oe=6279B1F7"
        },
    ]

    useEffect(()=>{
        const GetTrabajadoresHistorial = (idUsuario: string) => {
            const subscriber = firestore()
                .collection('Usuarios').doc(idUsuario).collection('Historial')
                .onSnapshot(snapshot => {
                    const data = snapshot.docs.map(doc => {
                        const enCurso = doc.data() as IHistorial
                        return enCurso;
                    })
                    let aux: ITrabajador[] = []
                    data.map(e => {
                        aux = aux.concat(Trabajador.filter(t => t.Id.includes(e.idTrabajador)))
                    })
                    setTrabajadorHistorial(aux)
                    setHistorial(data)
                })
            return () => subscriber()
        }

        GetTrabajadoresHistorial(Sesion.Id)
    
    },[])

    return (
        <View style={styles.containerGlobal}>
            <LinearGradient
                colors={['#00C9FF', '#92FE9D']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.1, 0.9]}
                style={styles.containerTitle}
            >
                <View style={styles.containerText}>
                    <Icon name="book" size={30} color="#000" />
                    <Text style={styles.title}>Historial</Text>
                    <Icon name="history" size={35} color="#000" />
                </View>
            </LinearGradient>
            <View style={styles.containerScroll}>
                <ScrollView>
                    {
                        TrabajadorHistorial.map((item, index) => (
                            Historial.map((e)=>(
                                e.idTrabajador===item.Id?
                                <CardTrades
                                key={index}
                                trade={item.Oficios.toString()}
                                user={item.nombre}
                                fecha={e.fecha}
                                idTrabajador={item.Id}
                                photoUser={item.fotoUser}
                                navigation={navigation}
                                from={4}
                            />
                            :null
                            ))
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Historial

const styles = StyleSheet.create({
    containerGlobal: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginRight: 10,
    },
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 9,
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    containerScroll: {
        height: '70%',
        padding: 10,
    }
})