import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import CardCategories from '../../components/Principal/CardCategory';
import CardTrades from '../../components/Principal/CardTrades';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import LogOut from '../../components/LogOut';
import { sesionReducer } from '../../context/Sesion/sesionReducer';
import { authInitialState, SesionContext } from '../../context/Sesion/SesionContext';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Avatar } from 'react-native-elements';
import { Contexto } from '../../utils/PeticionesProvider';
import useFiltrado from '../../hooks/useFiltrado';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;


const PrincipalClient = ({ navigation }: Props) => {

    const { Trabajador, Oficio,eventoFiltro, Trabajadoraux} = useContext(Contexto)
    const { Sesion } = useContext(SesionContext)
    const { workers } = useFiltrado()

    useEffect(() => {
        console.log(Trabajador);
    }, [Trabajador])

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerUser}>
                    <Avatar
                        size="large"
                        rounded
                        source={{
                            uri: Sesion.Photo
                        }}
                        containerStyle={styles.avatar}
                    />
                    <LogOut navigation={navigation} />
                </View>
                <View style={styles.containerGreetings}>
                    <Text style={styles.textName}> Hola {Sesion.Name} !!</Text>
                    <Text style={styles.textWelcome}>Mira lo que tenemos para ti.</Text>
                </View>
                <View style={styles.searchWork}>
                    <View style={styles.containerSearch}>
                        <Icon name="search" size={23} color="#000" />
                        <TextInput style={styles.inputSearch} placeholder="¿En qué te podemos ayudar?" placeholderTextColor="#999" />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerCategories}>
                    <CardCategories
                                    name={'Principal'}
                                
                                    icon={'star'}
                                />
                        {
                         
                            Oficio.map((e, index) => (
                                <CardCategories
                                    name={e.nameOffice}
                                    key={index}
                                    icon={e.iconName}
                                />
                            ))
                           
                        }
                    </View>
                </ScrollView>
                <View style={styles.containerTrades}>
                    {
                        (eventoFiltro==true)?
                        Trabajador.map((trade, index) => (
                            <CardTrades
                                key={index}
                                idTrabajador={trade.Id}
                                trade={trade.Oficios.toString()}
                                user={trade.nombre}
                                rating={trade.valoracion}
                                photoUser={trade.fotoUser}
                                navigation={navigation}
                                from={1}
                            />
                        ))
                        :
                        Trabajadoraux.map((trade, index) => (
                            <CardTrades
                                key={index}
                                idTrabajador={trade.Id}
                                trade={trade.Oficios.toString()}
                                user={trade.nombre}
                                rating={trade.valoracion}
                                photoUser={trade.fotoUser}
                                navigation={navigation}
                                from={1}
                            />
                        ))

                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default PrincipalClient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        marginLeft: 10,
        marginRight: 10,
    },
    containerUser: {
        marginTop: 50,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerGreetings: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
    },
    textName: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
    },
    textWelcome: {
        fontSize: 18,
        color: '#000',
        marginLeft: 7,
    },
    searchWork: {
        marginTop: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: '#3f3f3f',
        width: '100%',
        height: 60,
        borderRadius: 10,
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    inputSearch: {
        width: '100%',
        padding: 5,
        fontSize: 20,
        marginLeft: 10,
    },
    containerCategories: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 100,
        width: 500,
        height: 100,
    },
    containerTrades: {
        marginTop: 10,
        marginBottom: 100,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
        height: 'auto',
    },
    avatar: {
        width: 80,
        height: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderWidth: 1,
    }
})