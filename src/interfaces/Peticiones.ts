export interface ITrabajador {
    Id: string,
    fotoUser: string,
    nombre: string,
    Oficios: string[],
    valoracion: number,

}
export interface IUsuario {
    id: string
    nombre: string,
    numero: string,
    fotoUsuario: string
}
export interface IComentario {
    Id: string,
    IdTrabajador: string,
    calificacion: number,
    comentario: number,
    fotosComentario: string,
    idCliente: string

}
export type ICustomersComments = {
    name: string;
    photo: string;
    comment: string;
    idEmploye: string
}

export type IOficeIcon = {
    nameOffice: string;
    iconName: string;
}

export type IEnCurso = {
    fechaInicio: string,
    idTrabajador: string
}
