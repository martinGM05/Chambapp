import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Avatar } from 'react-native-elements';
import { RootStackParams } from '../../routes/StackNavigator';
import { SesionContext } from '../../context/Sesion/SesionContext';
import { Contexto } from '../../context/Data/PeticionesProvider';
import LogOut from '../../components/Buttons/LogOut';
import SearchInput from '../../components/Principal/SearchInput';
import CardCategories from '../../components/Principal/CardCategory';
import CardTrades from '../../components/Principal/CardTrades';
import useFirebase from '../../hooks/useFirebase';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;

const PrincipalClient = ({ navigation }: Props) => {

    const { Trabajador, eventoFiltro, Trabajadoraux } = useContext(Contexto)
    const { Sesion } = useContext(SesionContext)
    const { Oficio, GetOficios } = useFirebase()

    useEffect(() => {
        GetOficios()
    }, [])

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
                    <SearchInput />
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
                        eventoFiltro ?
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
        justifyContent: 'space-between',
    },
    containerGreetings: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
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