import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    name: string;
    icon: string;
}

const CardCategories = ({ name, icon }: Props) => {
    return (
        <View style={styles.containerCategory}>
            <Icon name={icon} size={30} color="#fff" />
            <Text style={styles.textCategory}>{name}</Text>
        </View>
    )
}

export default CardCategories

const styles = StyleSheet.create({
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