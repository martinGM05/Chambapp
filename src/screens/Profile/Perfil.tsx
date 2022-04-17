import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useReducer } from 'react'

import FormPerfil from '../../components/Perfil/FormPerfil';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import AvatarPerfil from '../../components/Perfil/AvatarPerfil';
import { sesionReducer } from '../../context/Sesion/sesionReducer';
import { cleanSingle } from 'react-native-image-crop-picker';
import { authInitialState, SesionContext } from '../../context/Sesion/SesionContext';
const dimensions = Dimensions.get('window')

const Perfil = () => {

   
    // console.log(dataUser);

    return (
        <ScrollView style={styles.container}>
            <LinearGradient 
                colors={['#00C9FF', '#92FE9D']}
                style={styles.containerProfile}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.1, 0.9]}
                >
                </LinearGradient>
            <View style={styles.containerForm}>
                <FormPerfil />
            </View>
        </ScrollView>
    )
}

export default Perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'purple'
    },
    containerProfile: {
        width: dimensions.width,
        height: dimensions.height * 0.3,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',

        zIndex: -1,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,

    },
    containerForm: {
        width: dimensions.width,
        height: dimensions.height * 0.74,
        // backgroundColor: 'yellow',
        zIndex: -1,
    },
    
    
    
})