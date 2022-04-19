import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { Contexto } from '../../utils/PeticionesProvider';

const SearchInput = () => {
    
    const [input, setInput] = useState('')
    const { FiltrarOficios, setEventoFiltro } = useContext(Contexto)

    useEffect(() => {
        if(input === ''){
            setEventoFiltro(true)
        }else{
            FiltrarOficios(input)
            setEventoFiltro(false)
        }
    }, [input]);

    return (
        <View style={styles.containerSearch}>
            <Icon name="search" size={23} color="#000" />
            <TextInput 
                style={styles.inputSearch} 
                placeholder="¿En qué te podemos ayudar?" 
                placeholderTextColor="#999" 
                onChangeText={(text) => setInput(text)}
            />
            {
                input != '' &&
                <Icon
                    name="times"
                    size={23}
                    color="#000"
                    onPress={() => setInput('')}
                />
            }
            {/* <Icon name="close" size={23} color="#000" /> */}
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
        // width: '100%',
    },
    inputSearch: {
        // width: '100%',
        padding: 5,
        fontSize: 20,
        marginLeft: 10,
    },
})