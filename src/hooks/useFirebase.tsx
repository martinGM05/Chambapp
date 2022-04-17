import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import storage from '@react-native-firebase/storage';

const useFirebase = () => {

    const [urlImage, setUrlImage] = useState('')

    const UploadImage = async (pathImage: string) => {
        const nameFile = pathImage.substring(pathImage.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? pathImage.replace('file://', '') : pathImage;
        const reference = storage().ref(nameFile);
        const task = reference.putFile(uploadUri);
        task.on('state_changed', snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log('Upload is ' + progress + '% done');
        }, error => {
            console.log(error);
        }, async () => {
            let url = await task.snapshot?.ref.getDownloadURL();
            setUrlImage(url!);
        });
    }


    return {
        urlImage,
        UploadImage
    }
}

export default useFirebase