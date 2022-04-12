import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

const PrincipalClient = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Icon name="user-circle" size={50} color="#000" />
            </View>
            <ScrollView style={{backgroundColor:'#F8FBFF'}} showsVerticalScrollIndicator={false}>
                <View style={styles.containerGreetings}>
                    <Text style={styles.textName}>Hola Martin!</Text>
                    <Text style={styles.textWelcome}>Mira lo que tenemos para ti.</Text>
                </View>
                <View style={styles.searchWork}>
                    <View style={styles.containerSearch}>
                        <Icon name="search" size={23} color="#000" />
                        <TextInput style={styles.inputSearch} placeholder="Buscar trabajo" placeholderTextColor="#999" />
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.containerCategories}>
                            <View style={styles.containerCategory}>
                                <Icon name="briefcase" size={30} color="#fff" />
                                <Text style={styles.textCategory}>Trabajo</Text>
                            </View>
                            <View style={styles.containerCategory}>
                                <Icon name="home" size={30} color="#fff" />
                                <Text style={styles.textCategory}>Vivienda</Text>
                            </View>
                            <View style={styles.containerCategory}>
                                <Icon name="car" size={30} color="#fff" />
                                <Text style={styles.textCategory}>Automóvil</Text>
                            </View>
                            <View style={styles.containerCategory}>
                                <Icon name="car" size={30} color="#fff" />
                                <Text style={styles.textCategory}>Automóvil</Text>
                            </View>
                            <View style={styles.containerCategory}>
                                <Icon name="car" size={30} color="#fff" />
                                <Text style={styles.textCategory}>Automóvil</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default PrincipalClient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FBFF',
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
        marginRight: 10,
        width: 500,
        height: 100,
    },
    containerCategory: {
        marginRight: 10,
        width: '18%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#46D0D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCategory: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
})