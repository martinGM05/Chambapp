import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useLogin from '../../hooks/useLogin';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';


interface Props {
    navigation: StackNavigationProp<RootStackParams, 'Login'>;
}


const SocialMedia = ({ navigation }: Props) => {

    const { signInWithGoogle } = useLogin()

    return (
        <View style={styles.containerSocialButtons}>
            <TouchableOpacity
                style={[styles.buttonMedia, styles.buttonGoogle]}
                onPress={() => signInWithGoogle(navigation)}
            >
                <Icon name='google' size={30} color='#fff' />
                <Text style={styles.textButton}>Inicia con Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SocialMedia

const styles = StyleSheet.create({
    containerSocialButtons: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    buttonMedia: {
        // width: '100%',
        marginHorizontal: '18%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    buttonFacebook: {
        backgroundColor: '#3b5998',

    },
    buttonGoogle: {
        backgroundColor: '#dd4b39',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})