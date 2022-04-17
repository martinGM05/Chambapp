import React, { createContext, useReducer, useState } from 'react'
import { sesionReducer } from './sesionReducer';
import { UserModel, EditUserData } from '../../interfaces/UserModel';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const authInitialState: UserModel = {
    Id: '',
    Name: '',
    Email: '',
    Phone: '',
    Photo: '',
}

export const editData = {
    Name: '',
    Phone: '',
}

export interface SesionContextProps {
    Sesion: UserModel;
    getUserData: (user: UserModel) => void;
    editUserData: (data: EditUserData) => void;
    setDataEdit: (user:EditUserData) => void;
    dataEdit: EditUserData;
    dataPhoto: string;
    setDataPhoto: (photo: string) => void;
}

export const SesionContext = createContext({} as SesionContextProps);

export const SesionProvider = ({ children }: {children: JSX.Element[]}) => {

    const [sesionState, dispatch] = useReducer(sesionReducer, authInitialState);

    const [dataPhoto, setDataPhoto] = useState('');
    const [dataEdit, setDataEdit] = useState(editData);


    const getUserData = async (User: UserModel) => {
        // console.log(User);
        try{
            await AsyncStorage.setItem('@idUser', User.Id);
        }catch(e){
            console.log(e);
        }
        dispatch({
            type: 'GET_USER',
            payload: User
        })
    }

    const editUserData = ({Name, Phone}: EditUserData) => {
        let data: UserModel = {
            Id: sesionState.Id,
            Name: Name,
            Email: sesionState.Email,
            Phone: Phone,
            Photo: dataPhoto != '' ? dataPhoto : sesionState.Photo,
        }
        dispatch({
            type: 'EDIT_USER',
            payload: data
        })
        // console.log(data);
    }
    

    return (
        <SesionContext.Provider value={{
            Sesion: sesionState,
            getUserData,
            editUserData,
            setDataEdit,
            dataEdit,
            dataPhoto,
            setDataPhoto
        }}>
            {children}
        </SesionContext.Provider>
    )
}