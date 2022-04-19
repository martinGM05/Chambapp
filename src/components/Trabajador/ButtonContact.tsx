import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SesionContext } from '../../context/Sesion/SesionContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Contexto } from '../../context/Data/PeticionesProvider';


const ButtonContact = () => {
    const{idTrabajadorContactar, GuardarTrabajosEnCurso}=useContext(Contexto)
    const { Sesion } = useContext(SesionContext)
    return (
        <View style={styles.containerContact}>
            <TouchableOpacity
                style={styles.buttonContact}
                onPress={()=>{
                    GuardarTrabajosEnCurso(Sesion.Id,idTrabajadorContactar.toString())
                }}
            >
                <Icon name="phone-in-talk" size={25} color="#000" />
                <Text style={styles.textContact}>Contactar</Text>
            </TouchableOpacity>
        </View>
    )
}


export default ButtonContact

const styles = StyleSheet.create({
    containerContact: {

        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        height: '15%',
        marginTop: 18,
        backgroundColor: '#00a680',
        borderWidth: 1,
        borderRadius: 10,

        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 10,
    },
    buttonContact: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textContact: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 15,
    },
})