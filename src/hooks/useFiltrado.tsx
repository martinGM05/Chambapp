import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Contexto, ITrabajador } from '../utils/PeticionesProvider';

const useFiltrado = () => {

    const { setTrabajador, setTrabajadoraux, Trabajador } = useContext(Contexto)
    const [workers, setWorkers] = useState<ITrabajador[]>([])

    const getWorkersForTrade = (trade: string) => {
        const auxTrabajador: ITrabajador[] = []
        Trabajador.forEach(item => {
            if (item.Oficios.includes(trade)) {
                auxTrabajador.push(item)
            }
        })
        setWorkers(auxTrabajador)
    }

    return {
        workers,
        getWorkersForTrade
    }
}

export default useFiltrado