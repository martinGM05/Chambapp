import { Alert, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth, { firebase } from '@react-native-firebase/auth';



interface Usuario {
    Nombre: string,
    Photo: string,
    Email: string,
    Phone: string,
    Password: string,
}

const useRegister = () => {

    const [active, setActive] = useState(false);
    const [existe, setExiste] = useState(false);

    const register = (data: Usuario) => {

        firestore().collection('Usuarios').where('Email', '==', data.Email).get()
            .then(function (querySnapshot) {
                if (querySnapshot.size > 0) {
                    setExiste(false)
                    console.log('existe');
                } else {

                    const nameFile = data.Photo.substring(data.Photo.lastIndexOf('/') + 1);
                    const uploadUri = Platform.OS === 'ios' ? data.Photo.replace('file://', '') : data.Photo;
                    const reference = storage().ref(nameFile);
                    const task = reference.putFile(uploadUri);
                    task.on('state_changed', snapshot => {
                        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        console.log('Upload is ' + progress + '% done');
                    }, error => {
                        console.log(error);
                    }
                        , async () => {
                            auth().createUserWithEmailAndPassword(data.Email, data.Password)
                                .then(async () => {
                                    const user = auth().currentUser;
                                    if (user) {
                                        let url = await task.snapshot?.ref.getDownloadURL();
                                        const userData = {
                                            Name: data.Nombre,
                                            Photo: url,
                                            Email: data.Email,
                                            Phone: data.Phone,
                                        }
                                        firestore().collection('Usuarios').doc(user.uid).set(userData);
                                    }
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        });
                    setExiste(true)
                }
            })
    }



    return {
        register,
        active,
        existe
    }
}

export default useRegister