import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardPopularyPeople from '../components/Principal/CardPopularyPeople'

const TrabajosEnCuso = () => {
  return (
    <View style={styles._ContainerGeneral}>
        <View style={styles._ContainerTittle}><Text style={styles._textTittlePage}>Trabajos en curso</Text></View>
        <View style={styles._containerCardUser}>
      <CardPopularyPeople _image='' _name='Manuel Francisco PeñA' _job='Programador' _rating={1}></CardPopularyPeople>
    </View>
    </View>
  )
}

export default TrabajosEnCuso

const styles = StyleSheet.create({
    _ContainerGeneral:{
        flex:1,
        

    },
    _containerCardUser:{
        marginTop: 50,
        marginLeft: 20,
        height: 'auto',
    

    },
    _ContainerTittle: {
        alignItems: 'center'
    },
    _textTittlePage: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        justifyContent: 'center'
    }

})