import { Alert, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { IComentario, IOficeIcon } from '../interfaces/Peticiones';
import { SesionContext } from '../context/Sesion/SesionContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../routes/StackNavigator';


interface Props {
    idTrabajador?: string;
}

export interface ValorarProps {
    calificacion: number;
    idEmploye: string;
    idUser: string;
    comentario: string;
    pathImage: string;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    navigation: StackNavigationProp<RootStackParams, 'Valorar'>;
}

const useFirebase = () => {


    const [urlImage, setUrlImage] = useState('')
    const [averageRating, setAverageRating] = useState<number>(0)
    const [foto, setFoto] = useState<string[]>([])
    const [Oficio, setOficio] = useState<IOficeIcon[]>([])
    const { Sesion } = useContext(SesionContext)

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
                setFoto([])
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



    const ValorarTrabajo = async (props: ValorarProps) => {
        let date: Date = new Date();
        //console.log(photoImage
        const nameFile = props.pathImage.substring(props.pathImage.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? props.pathImage.replace('file://', '') : props.pathImage;
        const reference = storage().ref(nameFile);
        const task = reference.putFile(uploadUri);
        task.on('state_changed', snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log('Upload is ' + progress + '% done');
        }, error => {
            console.log(error);
        }, async () => {
            let url = await task.snapshot?.ref.getDownloadURL();
            // console.log(date.getDay+'-'+date.getMonth()+'-'+date.getFullYear)
            firestore()
                .collection('Trabajadores').doc(props.idEmploye).collection('Comentarios')
                .doc(props.idUser).set({
                    calificacion: props.calificacion,
                    comentario: props.comentario,
                    fotosComentario: url,
                    idCliente: props.idUser
                }).then(() => {
                    firestore()
                        .collection('Usuarios').doc(Sesion.Id).collection('Historial')
                        .doc().set({
                            idTrabajador: props.idEmploye,
                            fecha: date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
                        }).then(() => {
                            firestore()
                                .collection('Usuarios')
                                .doc(Sesion.Id).collection('EnCurso').doc(props.idEmploye)
                                .delete()
                                .then(() => {
                                    props.setModalVisible(false)
                                    props.navigation.navigate('PrincipalCliente')
                                })
                        })
                })
        });


    }


    return {
        urlImage,
        UploadImage,
        GetTrabajadoresComentarios,
        foto,
        averageRating,
        Oficio,
        GetOficios,
        ValorarTrabajo
    }
}

export default useFirebase