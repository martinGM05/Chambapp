import React, { useContext, useEffect, useReducer, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { authInitialState, SesionContext } from '../context/Sesion/SesionContext';
import { sesionReducer } from '../context/Sesion/sesionReducer';
import firestore from '@react-native-firebase/firestore';
import { UserModel } from '../interfaces/UserModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {

    // const { getUserData } = useContext(SesionContext)
    const { getUserData } = useContext(SesionContext);
    const [active, setActive] = useState(1)

    useEffect(() => {

        GoogleSignin.configure({
            webClientId: '649252661715-3loaci7jflhskfhjl4g6dcvtet6rm5ag.apps.googleusercontent.com',
        })
    }, [])

    const getIdStorage = async (navigation: any) => {
        try {
            const idLogged = await AsyncStorage.getItem('@idUser');
            console.log('idLogged: ', idLogged);
            if (idLogged) {
                setActive(2)
                getDataFirebase(idLogged, navigation);
            }else{
                setActive(3)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getDataFirebase = async (id: string, navigation: any) => {
        try {
            await firestore().collection('Usuarios').doc(id).get()
                .then(function (doc) {
                    if (doc.exists) {
                        const userData: UserModel = doc.data() as UserModel;
                        userData.Id = doc.id;
                        getUserData(userData);
                        navigation.navigate('PrincipalCliente');
                    } else {
                        console.log("No such document!");
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }

    const loginWithEmail = async (email: string, password: string, navigation: any) => {
        await auth().signInWithEmailAndPassword(email, password)
            .then((e) => {
                getDataFirebase(e.user.uid, navigation);
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
        } catch (error) {
            console.log(error)
        }
    }


    return {
        loginWithEmail,
        signInWithGoogle,
        getIdStorage,
        active
    }
}

export default useLogin