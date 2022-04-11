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
            <View style={styles.goBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="ios-arrow-back" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.containerDescription}>
                    <Text style={styles.textDescription}>Registrate</Text>
                    <Text style={styles.textDescription2}>Requieres una cuenta para continuar</Text>
                </View>
                <View style={styles.containerForm}>
                    <FormRegister />
                </View>
                <View style={styles.containerSocialMedia}>
                    <SocialMedia />
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
    containerForm: {
        marginTop: 0,
    },
    containerSocialMedia: {
        marginTop: 25,
    }
})