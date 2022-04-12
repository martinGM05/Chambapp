import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import CardCategories from '../components/Principal/CardCategory';
import CardTrades from '../components/Principal/CardTrades';

const PrincipalClient = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerUser}>
                    <Icon name="user-circle" size={50} color="#000" />
                </View>
                <View style={styles.containerGreetings}>
                    <Text style={styles.textName}>Hola Martin!</Text>
                    <Text style={styles.textWelcome}>Mira lo que tenemos para ti.</Text>
                </View>
                <View style={styles.searchWork}>
                    <View style={styles.containerSearch}>
                        <Icon name="search" size={23} color="#000" />
                        <TextInput style={styles.inputSearch} placeholder="¿En qué te podemos ayudar?" placeholderTextColor="#999" />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerCategories}>
                        <CardCategories name="Comprar" icon="shopping-cart" />
                        <CardCategories name="Vender" icon="shopping-basket" />
                        <CardCategories name="Arrendar" icon="home" />
                        <CardCategories name="Mecanico" icon="car" />
                        <CardCategories name="Cuidar" icon="paw" />
                        <CardCategories name="Musico" icon="music" />
                        <CardCategories name="Otros" icon="question" />
                    </View>
                </ScrollView>
                <View style={styles.containerTrades}>
                    <CardTrades />
                    <CardTrades />
                </View>
            </ScrollView>
        </View>
    )
}

export default PrincipalClient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        marginLeft: 10,
        marginRight: 10,
    },
    containerUser: {
        marginTop: 50,
    },
    containerGreetings: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
    },
    textName: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
    },
    textWelcome: {
        fontSize: 18,
        color: '#000',
    },
    searchWork: {
        marginTop: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: '#3f3f3f',
        width: '100%',
        height: 60,
        borderRadius: 10,
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    inputSearch: {
        width: '100%',
        padding: 5,
        fontSize: 20,
        marginLeft: 10,
    },    
    containerCategories: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 100,
        width: 500,
        height: 100,
    },
    containerTrades: {
        marginTop: 10,
        marginBottom: 100,
        // borderWidth: 1,
        // borderColor: '#3f3f3f',
        width: '100%',
        height: 'auto',
    },
})