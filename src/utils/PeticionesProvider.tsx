import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';


export interface ITrabajador {
    Id: string,
    fotoUser: string,
    nombre: string,
    Oficios: string[],
    valoracion: number

}

interface ContextProps{
    
    Trabajador:ITrabajador[]

}

interface Props{
    children: JSX.Element
}

export const Contexto = createContext<ContextProps>({} as ContextProps);



const PeticionesProvider = ({children}:Props) => {

   const [Trabajador, setTrabajador] = useState<ITrabajador[]>([])

    useEffect(()=>{
         function GetTrabajadores() {
            const suscriber = firestore().collection('Trabajadores')
                .onSnapshot(snapshot => {
                    //console.log('sds'+snapshot)
                    const data = snapshot.docs.map(doc => {
                        const trabajador = doc.data() as ITrabajador;
                        trabajador.Id = doc.id;
                        return trabajador;
                    })
                    //console.log(data)
                    setTrabajador(data)
                })
            return () => suscriber();
        }
        GetTrabajadores()

    },[])

  return (
    <Contexto.Provider value={{
        Trabajador
    }}>
        {children}
        </Contexto.Provider>
  )
}

export default PeticionesProvider

