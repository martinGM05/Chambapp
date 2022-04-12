import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';

const CardTrades = () => {
    return (
        <View style={styles.cardTrade}>
            <View style={styles.imageTrade}>
                <Image
                    source={require('../../img/banner1.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.cardWorker}>
                <View style={styles.cardWorkerInfo}>
                    <View style={styles.cardInfoUser}>
                        <View style={styles.user}>
                            <Text style={styles.trade}>Prostituta</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../../img/no-image.png')}
                                    style={styles.userImage}
                                />
                                <Text style={styles.userName}>Manuel Francisco</Text>
                            </View>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                showRating={false}
                                size={15}
                                starContainerStyle={styles.star}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Icon name="chevron-right" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardTrades

const styles = StyleSheet.create({
    cardTrade: {
        width: '100%',
        height: 320,
        marginBottom: 20,
        marginTop: 5,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 5,
    },
    imageTrade: {
        flex: 2,
        backgroundColor: 'yellow',
        borderRadius: 30,
        position: 'relative',
        zIndex: 0,
    },
    cardWorker: {
        backgroundColor: '#f6f6f6',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 130,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 20.22,

        elevation: 3,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        resizeMode: 'contain',
    },
    cardWorkerInfo: {
        // borderWidth: 1,
        marginLeft: 5,
        marginRight: 13,
        marginTop: 13,
        // marginBottom: 10,
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardInfoUser: {
        // backgroundColor: '#bfeb27',
        width: '100%',
        height: '100%',
        padding: 10,
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'column',
        marginTop: 5,
        // borderWidth: 1,
    },
    userImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    userName: {
        marginLeft: 8,
        fontSize: 18,
        color: '#383838',
        marginTop: 9,
        fontWeight: 'bold',
    },
    trade: {
        fontSize: 23,
        color: '#000',
        fontWeight: 'bold',
        marginTop: -15,
        marginBottom: 10,
    },
    star: {
        left: 5,
        marginTop: -10,
    },
    button:{

    },
    moreInfo:{

    },
})