import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';


export interface ITrabajador {
    Id: string,
    fotoUser: string,
    nombre: string,
    Oficios: string[],
    valoracion: number,

}
export interface IComentario {
    Id: string,
    IdTrabajador: string,
    calificacion: number,
    comentario: string,
    fotosComentario: string,
    idCliente: string

}
interface ContextProps {
    Trabajador: ITrabajador[]
    Oficio: string[]


}

interface Props {
    children: JSX.Element
}

export const Contexto = createContext<ContextProps>({} as ContextProps);



const PeticionesProvider = ({ children }: Props) => {

    const [Trabajador, setTrabajador] = useState<ITrabajador[]>([])
    const [Oficio, setOficio] = useState<string[]>([])

    useEffect(() => {
        function GetTrabajadores() {
            const suscriber = firestore().collection('Trabajadores')
                .onSnapshot(snapshot => {
                    const data = snapshot.docs.map(doc => {
                        const trabajador = doc.data() as ITrabajador;
                        trabajador.Id = doc.id;
                        return trabajador;
                    })

                    setTrabajador(data)
                })
            return () => suscriber();

        }
        GetTrabajadores()


    }, [])

    // useEffect(() => {
    //     function GetTrabajadoresComentarios() {
    //        Trabajador.map(e=>{
    //         const suscriber = firestore().collection('Trabajadores').doc(e.Id).collection('Comentarios')
    //         .onSnapshot(snapshot => {
    //             //console.log('sds'+snapshot)
    //             const data = snapshot.docs.map(doc => {
    //                 const comentario = doc.data() as IComentario;
    //                 comentario.Id = doc.id;
    //                 comentario.IdTrabajador=e.Id
    //                 return comentario;
    //             })
    //             //console.log(data)
    //             setComentario(data)
    //         })
    //     return () => suscriber();
    //        })
    //     }
    //     //GetTrabajadoresComentarios() 
    //     //console.log(Comentario)

    // }, [])



    return (
        <Contexto.Provider value={{
            Trabajador,
            Oficio

        }}>
            {children}
        </Contexto.Provider>
    )
}

export default PeticionesProvider

