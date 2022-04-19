import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { IComentario, IOficeIcon } from '../interfaces/Peticiones';

interface Props {
    idTrabajador?: string;
}

const useFirebase = () => {

    const [urlImage, setUrlImage] = useState('')
    const [averageRating, setAverageRating] = useState<number>(0)
    const [foto, setFoto] = useState<string[]>([])
    const [Oficio, setOficio] = useState<IOficeIcon[]>([])
    
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

    const GetTrabajadoresComentarios = (idTrabajador: string) => {
        firestore().collection('Trabajadores').doc(idTrabajador).collection('Comentarios')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const comentario = doc.data() as IComentario;
                    comentario.Id = doc.id;
                    return comentario;
                })
                let auxRating = 0
                setAverageRating(0)
                data.forEach(item => {
                    setFoto(item2 => [...item2, item.fotosComentario])
                    auxRating = auxRating + item.calificacion
                })
                setAverageRating(item3 => (item3 + (auxRating / data.length)))
            })
    }

    const GetOficios = () => {
        firestore().collection('Oficios').get()
            .then(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const data = doc.data() as IOficeIcon
                    return data;
                })
                setOficio(data)
            })
    }


    return {
        urlImage,
        UploadImage,
        GetTrabajadoresComentarios,
        foto,
        averageRating,
        Oficio,
        GetOficios
    }
}

export default useFirebase