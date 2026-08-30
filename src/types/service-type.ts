export interface Service {
    id: number;
    nombre: string;
    topico: string;
    descripcion: string;
    clase: "SERVICIO" | "PRODUCTO"
    imagenLogo: string;
    contacto: string;
    telefono?: string;
    redSocial?: string;
    notas: string[];
}