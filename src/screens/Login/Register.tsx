import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import FormRegister from '../../components/Login/FormRegister';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMedia from '../../components/Login/SocialMedia';

type Props = StackScreenProps<RootStackParams, 'Register'>;
const Register = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.goBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="ios-arrow-back" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerPhotoUser}>
                    <Icon name="ios-person" size={50} color="#000" />
                    <TouchableOpacity
                        style={styles.buttonPhotoUser}
                    >
                        <Icon name="ios-camera" style={styles.iconPhoto} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>Registrate</Text>
                <Text style={styles.textDescription2}>Requieres una cuenta para continuar</Text>
            </View>
            <ScrollView>
                <View style={styles.containerForm}>
                    <FormRegister />
                </View>
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    containerDescription: {
        marginTop: 20,
        marginBottom: 50,
    },
    textDescription: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    textDescription2: {
        fontSize: 15,
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
    },
    containerPhotoUser: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    containerForm: {
        marginTop: 0,
    },
    buttonPhotoUser: {
        width: 40,
        height: 40,
        backgroundColor: '#c660b4',
        position: 'absolute',
        borderRadius: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',        
        bottom: -10,
        left: -15,
    },
    iconPhoto: {
        fontSize: 30,
    }
})