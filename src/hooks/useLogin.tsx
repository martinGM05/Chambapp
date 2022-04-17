import React, { useContext, useEffect, useReducer } from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { authInitialState, SesionContext } from '../context/Sesion/SesionContext';
import { sesionReducer } from '../context/Sesion/sesionReducer';
import firestore from '@react-native-firebase/firestore';
import { UserModel } from '../interfaces/UserModel';

const useLogin = () => {

    // const { getUserData } = useContext(SesionContext)
    const { getUserData } = useContext(SesionContext);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '649252661715-3loaci7jflhskfhjl4g6dcvtet6rm5ag.apps.googleusercontent.com',
        })
    }, [])

    const loginWithEmail = async (email: string, password: string, navigation: any) => {
        await auth().signInWithEmailAndPassword(email, password)
            .then((e) => {
                const dataUser = firestore().collection('Usuarios').doc(e.user.uid);
                dataUser.get().then((doc) => {
                    if (doc.exists) {
                        const user = doc.data() as UserModel
                        user.Id = doc.id
                        getUserData(user)
                        navigation.navigate('PrincipalCliente')
                    } else {
                        console.log('No such document!');
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    const signInWithGoogle = async (navigation: any) => {
        try {
            let dataUser = {} as UserModel;
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential)
                .then((e) => {
                    dataUser = {
                        Id: e.user.uid,
                        Name: '' + e.user.displayName,
                        Email: ' ' + e.user.email,
                        Photo: '' + e.user.photoURL,
                        Phone: '0000000000',
                    }
                })
            await firestore().collection('Usuarios').doc(dataUser.Id).get().then((doc) => {
                if (doc.exists) {
                    const user = doc.data() as UserModel
                    user.Id = doc.id
                    getUserData(user)
                    navigation.navigate('PrincipalCliente')
                } else {
                    firestore().collection('Usuarios').doc(dataUser.Id).set(dataUser)
                    getUserData(dataUser)
                    navigation.navigate('PrincipalCliente')
                }
            })

            // firestore().collection('Usuarios').doc(dataUser.Id).set(dataUser)
            // getUserData(dataUser)
            // navigation.navigate('PrincipalCliente')
        } catch (error) {
            console.log(error)
        }
    }


    return {
        loginWithEmail,
        signInWithGoogle,
    }
}

export default useLogin