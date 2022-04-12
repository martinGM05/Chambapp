import { SafeAreaView, ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ofices = (props:dataProps) => {
    return (
        <View>
            <View style={styles._buttomofices}>
                <Text style={styles._textButtomOfices}>{props._nameOfice}</Text>
            </View>   
        </View>
    )
}

interface dataProps{
    _nameOfice:string
}

export default Ofices

const styles = StyleSheet.create({
    _buttomofices:{
        borderColor:'#000000',
        backgroundColor: '#F22E2E',
        width: 'auto',
        height:50,
        borderRadius:5,
        borderWidth:2,
        justifyContent:'center',
        marginLeft:10,
        padding: 10

    },
    _textButtomOfices:{
        fontSize:22,
        color:'white',
        textAlign:'center',
    }
    
    

})