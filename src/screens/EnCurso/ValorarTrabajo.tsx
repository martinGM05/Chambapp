import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Rating, AirbnbRating } from 'react-native-ratings';
import BackButton from '../../components/BackButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'PrincipalCliente'>;

const ValorarTrabajo = ({ navigation }: Props) => {
    return (
        <View>
            <BackButton navigation={navigation} />
            <View style={styles._containerDataEmployee}>
                <Icon name='user-circle' size={60} color='#000'></Icon>
                <View style={styles._containerTextName}>
                    <Text style={styles._textNameUser}>Manuel Francisco</Text>
                </View>
            </View>
            <View style={styles._containerUploadPhoto}>
                <View style={styles._containerTextUploadPhoto}>
                    <Text style={styles._textUploadPhoto}>Añade una {'\n'}evidencia del trabajo</Text>
                </View>

                <View style={styles._ContainerIconPhotoUpload}>
                    <Icon name='image' size={60} color='#000'></Icon>


                    <View style={styles._containerChildrenIcon}>
                        <Icon name='camera' size={30} color='#000'></Icon>
                    </View>
                </View>



            </View>
            <View style={styles._containerOpinionEmploye}>
                <Text style={styles._textOpinionEmploye}>¿Qué te parecío el trabajador?</Text>
                <View style={styles._containerInputText}>
                    <TextInput multiline={true} style={styles._inputsText}></TextInput>
                </View>

                <View style={styles._containerRating}>
                    <Text style={styles._textRating}>Valóralo: </Text>
                    <AirbnbRating
                        count={5}
                        defaultRating={3}
                        showRating={false}
                        size={20}

                    />

                </View>

            </View>

            <View style={styles._buttom}>
                <Text style={styles._textButtom}>Enviar Valoración</Text>
            </View>
        </View>
    )
}

export default ValorarTrabajo

const styles = StyleSheet.create({
    _containerGeneral: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'

    },
    _containerDataEmployee: {
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: 20

    },
    _containerTextName: {
        marginLeft: 20,
        marginTop: 15,


    },
    _imageUserBanner: {
        width: 60,
        height: 60
    },
    _textNameUser: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',

    },
    _containerUploadPhoto: {
        width: '90%',
        height: 120,
        backgroundColor: '#F22E2E',
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        borderWidth: 2
    },
    _textUploadPhoto: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    _containerTextUploadPhoto: {
        marginLeft: 20,
        marginTop: 0,
        width: 180,
        alignContent: 'center',
        justifyContent: 'center',

    },
    _ContainerIconPhotoUpload: {
       
       alignSelf:'center'

    },
    _containerChildrenIcon: {
        position: 'absolute',

        backgroundColor: '#3BD923',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 45
    },
    _containerOpinionEmploye: {
        width: '90%',
        height: 200,
        backgroundColor: '#F22E2E',
        marginTop: 20,
        alignSelf: 'center',




        borderWidth: 2,

    },
    _textOpinionEmploye: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'


    },
    _inputsText: {
        borderColor: '#FFF',
        backgroundColor: '#F9F9F9',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 1,
        paddingLeft: 20,
        fontSize: 20,
        width: '90%',
        height: 100,
        color: '#000',

    },
    _containerInputText: {

        alignItems: 'center',
    },
    _containerRating: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,
        alignItems: 'center'

    },
    _textRating: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20
    },
    _buttom: {
        backgroundColor: '#3BD923',
        width: '45%',
        height: 40,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 50

    },
    _textButtom: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20

    }

})