import { Dimensions, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Rating, AirbnbRating } from 'react-native-ratings';
import BackButton from '../../components/BackButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import AvatarValorar from '../../components/Valorar/AvatarValorar';
import { TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import usePhoto from '../../hooks/usePhoto';
type Props = StackScreenProps<RootStackParams, 'Valorar'>;

const dimension = Dimensions.get('window');


const ValorarTrabajo = ({ navigation, route }: Props) => {

    const photoUser = route.params?.photo;

    let image = 'https://dicesabajio.com.mx/wp-content/uploads/2021/06/no-image.jpeg'
    
    const { cameraOrGallery, photoNew } = usePhoto();

    let photoImage = photoNew ? photoNew : image;
    

    return (
        <LinearGradient
            colors={['#92FE9D', '#00C9FF']}
            start={{ x: 2, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.9]}
            style={styles.containerGlobal}
        >
            <BackButton navigation={navigation} />
            <View style={styles.avatar}>
                <AvatarValorar photo={photoUser} />
            </View>
            <ScrollView>


                <View style={styles.card}>

                    <View style={styles.infoWorker}>
                        <Text style={styles.textUser}>Manuel Francisco Peña</Text>
                        <Text style={styles.textTrade}>Carpintero</Text>
                    </View>
                    <View style={styles.valueIt}>
                        <Text style={styles.textQuestion}>¿Qué te pareció el trabajo?</Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={3}
                            size={20}
                            showRating={false}
                        />
                    </View>
                    <View style={styles.containerSend}>
                        <View style={styles.containerPhoto}>
                            <TouchableOpacity
                                style={styles.containerIcon}
                                onPress={() => cameraOrGallery()}
                            >
                                <Image
                                    source={{ uri: photoImage }}
                                    style={styles.image}
                                />
                                <Icon
                                    name="plus"
                                    size={30}
                                    color="#ddd1ce" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerComment}>
                            <TextInput
                                style={styles.inputComment}
                                placeholder="Escribe un comentario"
                                placeholderTextColor="#000"
                                multiline={true}
                                numberOfLines={4}
                            />
                        </View>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Icon name="star" size={30} color="#000" />
                            <Text style={styles.textValorar}>Valorar Trabajador</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default ValorarTrabajo

const styles = StyleSheet.create({
    containerGlobal: {
        flex: 1,
        // backgroundColor: 'purple',
        paddingTop: 150,
        paddingHorizontal: 20
    },
    card: {
        backgroundColor: 'white',
        height: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        paddingBottom: 20,
    },
    scroll: {
        // height: 10,
        backgroundColor: 'white',
        zIndex: 1,
    },
    avatar: {
        height: 100,
        width: 100,
        position: 'absolute',
        zIndex: 2,
        top: 100,
        left: dimension.width / 2 - 50,
    },
    infoWorker: {
        width: '75%',
        height: 80,
        // backgroundColor: '#308f4d',
        marginHorizontal: 20,
        marginTop: 60,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueIt: {
        width: '90%',
        height: 70,
        // backgroundColor: 'red',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSend: {
        width: '90%',
        height: 100,
        // backgroundColor: '#b30d47',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    containerPhoto: {
        width: '50%',
        height: 100,
        // backgroundColor: '#e2d054',
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    containerComment: {
        width: '90%',
        height: '100%',
        // backgroundColor: '#3f80f8',
    },
    containerButton: {
        width: '60%',
        height: 60,
        // backgroundColor: '#b30d47',
        marginTop: 130,
    },
    textUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    textTrade: {
        fontSize: 18,
        color: '#000',
    },
    textQuestion: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    photo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#5e5948',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    containerIcon: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 3,
    },
    icon: {
        position: 'absolute',
    },
    inputComment: {
        borderRadius: 10,
        backgroundColor: '#c2c2c2',
        color: '#000',
        borderWidth: 1,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#00a680',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
    },
    textValorar: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    }
})