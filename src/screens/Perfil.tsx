import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Perfil = () => {
    return (
        <View style={styles._containerGeneral}>
            <View style={styles._ContainerTittle}><Text style={styles._textTittlePage}>Editar Perfil</Text></View>
            <View>
                <View style={styles._containerImageProfile}>
                    <Icon name='user-circle' size={150} color='#000' style={styles._ImageIconUser} />

                </View>
                <View style={styles._containerChildrenIcon1}>
                    <Icon name='camera' size={40} color='#000' />
                </View>
                <View style={styles._containerChildrenIcon2}>
                    <Icon name='image' size={40} color='#000' />
                </View>
            </View>

            <View style={styles._containerForm}>
                <View style={styles._containerInput}>
                    <Text style={styles._Keyreference}>Nombre:  </Text>
                    <TextInput style={styles._inputsText}></TextInput>
                </View>
                <View style={styles._separator}></View>
                <View style={styles._containerInput}>
                    <Text style={styles._Keyreference}>Correo:  </Text>
                    <TextInput keyboardType='email-address' style={styles._inputsText}></TextInput>
                </View>
                <View style={styles._separator}></View>
                <View style={styles._containerInput}>
                    <Text style={styles._Keyreference}>Número:  </Text>
                    <TextInput keyboardType='number-pad' style={styles._inputsText}></TextInput>
                </View>
            </View>

        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({
    _containerGeneral: {
        flex: 1
    }, _containerImageProfile: {
        justifyContent: 'center',
        height: 'auto',

        alignItems: 'center'
    },
    _ImageIconUser: {
        marginTop: 50,


    },
    _ContainerTittle: {
        alignItems: 'center'
    },
    _textTittlePage: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    _containerChildrenIcon1: {
        width: 70,
        height: 70,
        position: 'absolute',
        marginTop: 160,
        marginLeft: 210,
        backgroundColor: '#3BD923',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _containerChildrenIcon2: {
        width: 70,
        height: 70,
        position: 'absolute',
        marginTop: 160,
        marginLeft: 80,
        backgroundColor: '#3BD923',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _containerForm: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    },
    _containerInput: {
        flexDirection: 'row'
    },
    _inputsText: {
        borderColor: '#000',
        backgroundColor: '#C7C7C7',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 1,
        paddingLeft: 20,
        fontSize: 20,
        width: '70%',
        height: 45,
        color: '#000',

    },
    _Keyreference: {
        fontSize: 25,
        color: '#000',
        marginTop: 15

    },
    _separator: {
        backgroundColor: '#B3B3B3',
        width: '95%',
        height: 1,
        marginTop: 30,
        marginBottom:30
    }

})