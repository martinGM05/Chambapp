import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Feedback = () => {
    return (
        <View style={styles.feedback}>
            <View style={styles.containerTitle}>
                <View style={styles.containerCommentTitle}>
                    <Icon name="shield-crown-outline" size={30} color="#ff762d" />
                    <Text style={styles.title}>Esto es lo que opinan mis clientes</Text>
                    <Icon name="shield-crown-outline" size={30} color="#ff762d" />
                </View>
            </View>
            <View style={styles.comments}>

            </View>
        </View>
    )
}

export default Feedback

const styles = StyleSheet.create({
    feedback: {
        marginTop: 20,
        marginLeft: 16,
        marginRight: 10,
        marginBottom: 20,
        // borderWidth: 1,
        width: '90%',
        height: '50%',
    },
    containerTitle: {
        alignItems: 'center',
        marginTop: 5,
    },
    title: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    comments: {
        borderWidth: 1,
        width: '100%',
        height: '80%',
        backgroundColor: '#516680',
        marginTop: 10,
    },
    containerCommentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
    }
})