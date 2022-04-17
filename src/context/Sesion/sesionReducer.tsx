import { UserModel } from '../../interfaces/UserModel';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';

type SesionAction =
    | { type: 'GET_USER'; payload: UserModel }
    | { type: 'EDIT_USER'; payload: UserModel }

export const sesionReducer = (state: UserModel, action: SesionAction): UserModel => {
    switch (action.type) {
        case 'GET_USER': {
            // console.log('idUser:', idUser);
            return {
                Id: action.payload.Id,
                Name: action.payload.Name,
                Email: action.payload.Email,
                Phone: action.payload.Phone,
                Photo: action.payload.Photo,
            }
        }
        case 'EDIT_USER': {

            const nameFil = action.payload.Photo.substring(action.payload.Photo.lastIndexOf('/') + 1);
            const uploadUri = Platform.OS === 'ios' ? action.payload.Photo.replace('file://', '') : action.payload.Photo;
            const reference = storage().ref(nameFil);
            const task = reference.putFile(uploadUri);
            task.on('state_changed', snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + progress + '% done');
            }, error => {
                console.log(error);
            }, async () => {
                let url = await task.snapshot?.ref.getDownloadURL();
                firestore().collection('Usuarios').doc(action.payload.Id).update({
                    Name: action.payload.Name,
                    Phone: action.payload.Phone,
                    Photo: url,
                });
            });
            return {
                ...action.payload
            }
        }
        default:
            return state;
    }
}
