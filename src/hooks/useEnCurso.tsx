import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SesionContext } from '../context/Sesion/SesionContext';
import firestore from '@react-native-firebase/firestore';
import { IHistorial, ITrabajador } from '../interfaces/Peticiones';
import { Contexto } from '../context/Data/PeticionesProvider';

const useEnCurso = () => {

    const [HistorialList, setHistorial] = useState<IHistorial[]>([])
 
    const { Trabajador } = useContext(Contexto)
    const [TrabajadorHistorial, setTrabajadorHistorial] = useState<ITrabajador[]>([])

    const GetTrabajadoresHistorial = (idUsuario: string) => {
        firestore()
            .collection('Usuarios').doc(idUsuario).collection('Historial')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const enCurso = doc.data() as IHistorial
                    return enCurso;
                })
                let aux: ITrabajador[] = []
                data.map(e => {
                    aux = aux.concat(Trabajador.filter(t => t.Id.includes(e.idTrabajador)))
                })
                setTrabajadorHistorial(aux)
                setHistorial(data)
            })
    }

    return {
        GetTrabajadoresHistorial,
        TrabajadorHistorial,
        HistorialList
    }
}

export default useEnCurso