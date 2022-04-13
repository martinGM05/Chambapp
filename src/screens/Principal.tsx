import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import BannerPrincipal from '../components/Principal/BannerPrincipal'
import Ofices from '../components/Principal/Ofices'
import CardPopularyPeople from '../components/Principal/CardPopularyPeople'
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';
import { Contexto } from '../utils/PeticionesProvider'

export interface ITrabajador{
    Id:string,
    foto:string,
    nombre:string,
    oficio:string,
    valoracion:number

}


const Principal = () => {
    const contexto=useContext(Contexto);
    
    

    return (
    
        <View style={{ flex: 1 }}>
            <View style={{width:50,height:50,backgroundColor:'#000'}}><Text>Hola</Text></View>
            <BannerPrincipal _name={'Martín González'} _greeting={'Buenos Días'} _imageUser={''}></BannerPrincipal>

            <View style={styles._containerGlobal}>
                <Text style={styles._textGlobal}>Oficios</Text>
                <SafeAreaView>
                    <ScrollView horizontal={true}>
                        <View style={styles._containerOficeButtom}>
                            <Ofices _nameOfice='Carpinteria'></Ofices>
                            <Ofices _nameOfice='Plomeria'></Ofices>
                            <Ofices _nameOfice='Programación'></Ofices>
                            <Ofices _nameOfice='Electricista'></Ofices>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>

            <View style={styles._containerGlobal}>
                <Text style={styles._textGlobal}>Populares</Text>

                <ScrollView>
                    <View style={styles._containerCardsPeople}>
                        <CardPopularyPeople _image='' _name='Manuel Francisco PeñA' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                        <CardPopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></CardPopularyPeople>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Principal

const styles = StyleSheet.create({
    _textGlobal: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'

    },
    _containerGlobal: {
        marginTop: 10,
        marginLeft: 20,
        height: 'auto',
    },
    _containerOficeButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    _containerCardsPeople: {
        marginTop: 15,
        height: 'auto',

    }

})