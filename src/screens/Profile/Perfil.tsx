import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import FormPerfil from '../../components/Perfil/FormPerfil';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import AvatarPerfil from '../../components/Perfil/AvatarPerfil';

const dimensions = Dimensions.get('window')

const Perfil = () => {

    let dataUser = {
        Name: 'Victoria Juarez',
        Email: 'victoria@gmail.com',
        Phone: '2311231234',
        Photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    }

    return (
        <ScrollView style={styles.container}>
            <LinearGradient 
                colors={['#00C9FF', '#92FE9D']}
                style={styles.containerProfile}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.1, 0.9]}
                >
                    <View style={styles.userData}>
                        <AvatarPerfil photo={dataUser.Photo} />
                    </View>
                </LinearGradient>
            <View style={styles.containerForm}>
                <FormPerfil {...dataUser} />
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
    userData: {
        width: '60%',
        height: '80%',
        // backgroundColor: 'black',
        position: 'absolute',
        bottom: -50,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    
})