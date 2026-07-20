export interface Event {
    id: number;
    titulo: string;//titulo del evento
    fecha: string[];//fecha o fechas en las que dure el evento
    hora: string;//horario de inicio
    tipo: string;//tema del evento 'consulta' | 'vacuna' | 'cirujia';
    responsable: string;// persona u organismo responsable
    ubicacion: string;//ubicacion del evento
    contacto: string;//un link de la publicacion
}//borrar
export interface Event2 {
    id: number;
    titulo: string;//titulo del evento
    fecha: string;//fecha o fechas en las que dure el evento
    hora: string;//horario de inicio
    tipo: string;//tema del evento 'consulta' | 'vacuna' | 'cirujia';
    responsable: string;// persona u organismo responsable
    ubicacion: string;//ubicacion del evento
    contacto: string;//un link de la publicacion
}