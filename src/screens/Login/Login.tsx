import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react'
import FormLogin from '../../components/Login/FormLogin';
import SocialMedia from '../../components/Login/SocialMedia';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = StackScreenProps<RootStackParams, 'Login'>;
const Login = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-arrow-back" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.containerWelcome}>
                    <Text style={styles.textWelcome}>Bienvenido de nuevo!</Text>
                    <Text style={styles.textDescription}>Inicia sesión para continuar</Text>
                </View>
                <View style={styles.containerForm}>
                    <FormLogin />
                </View>
                <View style={styles.containerSocial}>
                    <SocialMedia />
                    <View>
                        <Text style={styles.textRegister}>
                            ¿No tienes una cuenta? <Text style={styles.textHere}>Registrate</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    containerWelcome: {
        flex: 1,
        marginTop: 20,
        marginBottom: 50,
    },
    textWelcome: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    textDescription: {
        fontSize: 20,
    },
    textRegister: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
    textHere: {
        fontWeight: 'bold',
    },
    containerForm: {
        flex: 1,
        marginTop: 40,
    },
    containerSocial: {
        flex: 1,
        marginTop: 130,
    },
    goBack: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})