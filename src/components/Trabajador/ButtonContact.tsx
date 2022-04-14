import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ButtonContact = () => {
    return (
        <View style={styles.containerContact}>
            <TouchableOpacity
                style={styles.buttonContact}
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