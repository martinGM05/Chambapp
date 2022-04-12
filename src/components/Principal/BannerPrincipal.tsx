import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const BannerPrincipal = (props: dataProps) => {
  return (
    <View style={styles._containerPrincipal}>
      <View>
        <Image style={styles._imageBanner} source={require('../../img/banner1.png')}></Image>
        <View style={styles._ContainerInformationUserBanner} >
            {props._imageUser==''?<Icon name="user-circle" size={60} color="#000" style={styles._imageUserBanner} />:<Image style={styles._imageUserBanner} source={{uri:props._imageUser}}/>}
            <View style={styles._containerNameandGreeting}>
                <Text style={styles._textNameUserBanner}>{props._name}</Text>
                <Text style={styles._textGreetingDayBanner}>{props._greeting}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

interface dataProps{
    _name: String,
    _greeting: string,
    _imageUser: string
}

export default BannerPrincipal

const styles = StyleSheet.create({
    _containerPrincipal:{
        
    },
    _imageBanner:{
        width: '100%',
        height:180 
    },
    _ContainerInformationUserBanner:{
        position:'absolute',
        flexDirection:'row',
        marginLeft:19,
        marginTop:100
    },
    _containerNameandGreeting:{
        marginLeft:10,
        marginTop: 8

    },
    _imageUserBanner:{
        width: 60,
        height: 60
    },
    _textNameUserBanner:{
        fontWeight:'bold',
        fontSize:25,
        color:'black',
        
    },
    _textGreetingDayBanner:{
        fontWeight:'bold',
        fontSize:16

    }

})