import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome'

const CardPopularyPeople = (props:dataProps) => {
    const [defaultRating, setdefaultRating] = useState(props._rating)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])
    const startImgFilled = ''
    const startImgCorner = ''

    return (
        <View style={styles._containerDataPopularyPeople}>
            <Icon name="image" size={60} color="#000" style={styles._photo}/>
            <View style={styles._containerDataPeople}>
                <Text style={styles._textNamePeople}>{props._name}</Text>
                <Text style={styles._textJobPeople}>{props._job}</Text>
                <View style={styles._containerRating}>
                    <AirbnbRating
                        count={5}
                        defaultRating={props._rating}
                        showRating={false}
                        size={20}

                    />
                </View>

            </View>
           <View style={styles._containerImageMoreInformation}>
           <Icon name="chevron-right" size={50} color="#000" style={styles._imageMoreInformation}/>
           </View>
        </View>
    )
}
interface dataProps{
    _image:string,
    _name:string,
    _job:string,
    _rating:number
}

export default CardPopularyPeople

const styles = StyleSheet.create({
    _containerDataPopularyPeople: {
        flexDirection: 'row',
        height: 120,
        width: '95%',
        backgroundColor: '#F22E3E',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom:10

    },
    _photo: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginLeft: 8
    },
    _containerDataPeople: {
        marginLeft: 10,
        justifyContent: 'center',
        width:140
    },
    _textNamePeople:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'

    },
    _textJobPeople:{
        color:'white',
        fontSize:12
    },
    _containerRating:{
        marginTop:5
    },
    _containerImageMoreInformation:{
        justifyContent:'center',
        alignSelf:'stretch',
        marginLeft:50,
        marginTop:20

    },
    _imageMoreInformation:{
        width:70,
        height:70,
    }
})