import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BannerPrincipal from '../components/Principal/BannerPrincipal'
import Ofices from '../components/Principal/Ofices'
import PopularyPeople from '../components/Principal/PopularyPeople'

const Principal = () => {
    return (
        <View style={{flex:1}}>
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
                    <PopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></PopularyPeople>
                    <PopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></PopularyPeople>
                    <PopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></PopularyPeople>
                    <PopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></PopularyPeople>
                    <PopularyPeople _image='' _name='Manuel Francisco' _job='Programador' _rating={1}></PopularyPeople>
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
        marginLeft: 20
    },
    _containerOficeButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10
    },
    _containerCardsPeople:{
        marginTop:15,
        
    }

})