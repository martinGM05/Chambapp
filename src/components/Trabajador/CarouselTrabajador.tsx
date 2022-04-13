import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Swiper from 'react-native-swiper'


interface Props {
    carousel : string[],
}

const dimensions = Dimensions.get('window')

const CarouselTrabajador = ({carousel}:Props) => {
    return (
        <View style={styles.containerCarousel}>
            <Swiper style={styles.wrapper} showsButtons={true}
                autoplay={true} autoplayTimeout={9} activeDotColor="#000"
                dotColor="#fff" loop={true} bouncesZoom={true}
                nextButton={<Text style={styles.buttonText}>›</Text>}
                prevButton={<Text style={styles.buttonText}>‹</Text>}
            >
                {
                    carousel.map((item, index) => {
                        return (
                            <View style={styles.slide1} key={index}>
                                <Image source={{ uri: item }} style={styles.image} />
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default CarouselTrabajador

const styles = StyleSheet.create({
    containerCarousel: {
        // marginTop: 20,
        paddingBottom: 50,
        // backgroundColor: 'red',
        padding: 0,
        top: 0,
        left: 0,
        height: '45%',
        width: dimensions.width,
    },
    wrapper: {
    },
    buttonText: {
        fontSize: 80,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})