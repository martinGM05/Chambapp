import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';
import { IComentario, ICustomersComments, IEnCurso, IHistorial, IOficeIcon, ITrabajador } from '../../interfaces/Peticiones';
import { ContextProps } from '../../interfaces/Contexts';
import useFirebase from '../../hooks/useFirebase';

export const Contexto = createContext<ContextProps>({} as ContextProps);

const PeticionesProvider = ({ children }: { children: JSX.Element }) => {
    


    const [Trabajador, setTrabajador] = useState<ITrabajador[]>([])
    const [Trabajadoraux, setTrabajadoraux] = useState<ITrabajador[]>([])
    const [Oficio, setOficio] = useState<IOficeIcon[]>([])
    const [comentario, setComentario] = useState<ICustomersComments[]>([])
    const [listaImagenes, setListaImagenes] = useState<string[]>([])
    const [averageRating, setAverageRating] = useState<number>(0)
    const [filtroOficio, setFiltroOficio] = useState<string[]>([])
    const [eventoFiltro, setEventoFiltro] = useState<boolean>(true)
    const [idTrabajadorContactar, setIdTrabajadorContactar] = useState<string>('')
    const [TrabajadorEnCurso, setTrabajadorEnCurso] = useState<ITrabajador[]>([])
    const [HistorialList, setHistorial] = useState<IHistorial[]>([])
    const [TrabajadorHistorial, setTrabajadorHistorial] = useState<ITrabajador[]>([])

    useEffect(() => {
        GetTrabajadores()
    }, [])

    function GetTrabajadores() {
        const suscriber = firestore().collection('Trabajadores')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const trabajador = doc.data() as ITrabajador;
                    trabajador.Id = doc.id;
                    return trabajador;
                })
                setTrabajador([])
                setTrabajador(data)
            })
        return () => suscriber();
    }

    const GetTrabajadoresComentarios = (id: string) => {
        firestore().collection('Trabajadores').doc(id).collection('Comentarios')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const comentario = doc.data() as IComentario;
                    comentario.Id = doc.id;
                    comentario.IdTrabajador = id
                    return comentario;
                })
                let auxRating = 0
                setAverageRating(0)
                setComentario([])
                setListaImagenes([])
                data.forEach(item => {
                    setListaImagenes(item2 => [...item2, item.fotosComentario])
                    auxRating = auxRating + item.calificacion
                    firestore().collection('Usuarios').doc(item.idCliente).get()
                        .then(function (doc) {
                            if (doc.exists) {
                                const document = JSON.stringify(doc.data())
                                const aux2 = JSON.parse(document)
                                const j = JSON.stringify({ name: aux2['Name'], photo: aux2['Photo'], comment: item.comentario, idEmploye: id })
                                const aux = JSON.parse(j)
                                setComentario(item3 => [...item3, aux]) 
                            }
                        })
                })
                setAverageRating(item3 => (item3 + (auxRating / data.length)))

            })
    }

    const limpiarState = () => {
        setComentario([])
        setListaImagenes([])
        setAverageRating(0)
    }


    const FiltrarOficios = (oficio: string) => {
        let aux: ITrabajador[] = []
        Trabajador.forEach(item => {
            // if (item.Oficios.includes(oficio)) {
            //     aux = [...aux, item]
            // }
            item.Oficios.forEach(item2 => {
                let tradeLower = item2.toLowerCase()
                let oficioLower = oficio.toLowerCase()
                if (tradeLower === oficioLower) {
                    aux = [...aux, item]
                }
            })
        })
        setTrabajadoraux(aux)
    }

    const GuardarTrabajosEnCurso = (idUsuario: string, idTrabajadorSave: string) => {
        let date: Date = new Date();
        firestore()
            .collection('Usuarios').doc(idUsuario).collection('EnCurso')
            .doc(idTrabajadorSave).set({
                idTrabajador: idTrabajadorSave,
                fechaInicio: date.toLocaleDateString()
            })
    }

    const GetTrabajadoresEnCurso = (idUsuario: string) => {
        firestore().collection('Usuarios').doc(idUsuario)
            .collection('EnCurso').onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const enCurso = doc.data() as IEnCurso
                    return enCurso;
                })
                let aux: ITrabajador[] = []
                data.map(e => {
                    aux = aux.concat(Trabajador.filter(t => t.Id.includes(e.idTrabajador)))
                })
                setTrabajadorEnCurso(aux)
            })
    }

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
    
  


    return (
        <Contexto.Provider value={{
            Trabajador,
            comentario,
            listaImagenes,
            averageRating,
            GetTrabajadoresComentarios,
            limpiarState,
            filtroOficio,
            FiltrarOficios,
            setTrabajador,
            setTrabajadoraux,
            setEventoFiltro,
            eventoFiltro,
            Trabajadoraux,
            idTrabajadorContactar,
            setIdTrabajadorContactar,
            GuardarTrabajosEnCurso,
            TrabajadorEnCurso,
            GetTrabajadoresEnCurso,
            GetTrabajadoresHistorial,
            TrabajadorHistorial,
            HistorialList
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default PeticionesProvider

