import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props {
    navigation: StackNavigationProp<RootStackParams, 'PrincipalCliente'>;
}

const LogOut = ({ navigation }: Props) => {

    const logOut = async () => {
        try {
            await AsyncStorage.removeItem('@idUser');
            const provider = auth().currentUser?.providerData[0].providerId;
            if (provider === 'google.com') {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
            } else {
                await auth().signOut();
            }
            navigation.navigate('Principal');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TouchableOpacity style={styles.containerGlobal}
            onPress={() => logOut()}
        >
            <Icon name="sign-out" size={30} color="#000" />
        </TouchableOpacity>
    )
}

export default LogOut

const styles = StyleSheet.create({
    containerGlobal: {
        width: 40,
        height: 40,
        // backgroundColor: 'red',
    }
})