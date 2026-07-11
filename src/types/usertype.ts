export type User = {//no tiene uso
    id:number;
    name: string;
    profileImage: string;
}

type UserContact = {
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
}
export const posiblesservicios: string[] = [
  "Clínica médica",
  "Clinica quirúrgica de tejidos blandos",
  "Cirugia cardiotoraxica",
  "Cirugía laparoscópica",
  "Laboratorio de análisis clinicos",
  "Diagnóstico por imágenes ( rx y ecografía)",
  "Medicina felina",
  "Banco de Sangre y medicina transfusional",
  "Farmacia veterinaria"
]
export interface Profesional {
  id: number;
  nombre: string;// nombre del profesional
  especialidad: string; // especialidad medica
  practicas?: string[];//especies, practicas, conocimientos
  imagen: string;// url de la foto de perfil
  ubicacion: string;//contacto
  telefono: string;//contacto
  email: string;//contacto
  hacedomicilio: boolean;// para filtrar si hace visitas a domicilio

  contacto?: UserContact;
  rating?: number;
  disponible?: boolean;
}