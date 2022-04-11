import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const SocialMedia = () => {
    return (
        <View style={styles.containerSocialButtons}>
            <Pressable
                style={[styles.buttonMedia, styles.buttonFacebook]}
            >
                <Icon name='logo-facebook' size={30} color='#fff' />
            </Pressable>
            <Pressable
                style={[styles.buttonMedia, styles.buttonGoogle]}
            >
                <Icon name='logo-google' size={30} color='#fff' />
            </Pressable>
        </View>
    )
}

export default SocialMedia

const styles = StyleSheet.create({
    containerSocialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      buttonMedia:{
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
      },
      buttonFacebook:{
        backgroundColor: '#3b5998',
    
      },
      buttonGoogle:{
        backgroundColor: '#dd4b39',
      },
})