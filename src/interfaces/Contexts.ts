import { ICustomersComments, IHistorial, IOficeIcon, ITrabajador } from "./Peticiones"

export interface ContextProps {
    Trabajador: ITrabajador[];
    comentario: ICustomersComments[];
    listaImagenes: string[];
    averageRating: number;
    GetTrabajadoresComentarios: (id: string) => void;
    limpiarState: () => void;
    filtroOficio: string[];
    FiltrarOficios: (oficio: string) => void;
    setTrabajador: (trabajador: ITrabajador[]) => void;
    setTrabajadoraux: (trabajador: ITrabajador[]) => void;
    setEventoFiltro: (estado: boolean) => void;
    eventoFiltro: boolean;
    Trabajadoraux: ITrabajador[];
    idTrabajadorContactar: string;
    setIdTrabajadorContactar: (idTrabajadorConcatenar: string) => void;
    GuardarTrabajosEnCurso: (idUsuario: string, idTrabajadorsave: string) => void;
    TrabajadorEnCurso: ITrabajador[];
    GetTrabajadoresEnCurso: (idUser: string) => void;
    GetTrabajadoresHistorial: (idUser: string) => void;
    TrabajadorHistorial: ITrabajador[];
    HistorialList: IHistorial[];
}