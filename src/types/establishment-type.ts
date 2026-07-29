type EstablishmentContact = {
  email: string;
  phone: string;
  latitud?: number;
  longitud?: number;
  address: string;
  city: string;
  state: string;
  country: string;
}
type EstablishmentService = {
  tienequirofano: boolean;// pa servicios
  tienelaboratorio: boolean;// pa servicios
  tieneinternacion: boolean;// pa servicios
  haceurgencias: boolean;// pa servicios
  tienepeluqueria: boolean;// pa servicios
  tienepetshop: boolean;// pa servicios
}
type EstablishmentHours = {
  days: string[];
  opening: string;
  closing: string;
}
export interface Establishment {
    id: number;
  nombre: string;// nombre del profesional
  imagen?: string;// url de la foto de perfil
  horario?: string;
    horarios?: EstablishmentHours;
  profesionalesVinculados: string[];
  especialidades: string[]; // especialidad medica
  practicas: string;//especies,practicas, conocimientos

    contacto?: EstablishmentContact
  ubicacion: string;//contacto
  telefono: string[];//contacto
  email?: string;//contacto
  latitud: number;
  longitud: number;

    servicios?: EstablishmentService;
  tienequirofano?: boolean;// pa servicios
  tienelaboratorio?: boolean;// pa servicios
  tieneinternacion?: boolean;// pa servicios
  haceurgencias?: boolean;// pa servicios
  tienepeluqueria?: boolean;// pa servicios
  tienepetshop?: boolean;// pa servicios

  disponible: boolean;
  insignias:string[];
  redsocial?: string;//red social para contacto
}
// Datos de ejemplo
/* const establecimiento :Establecimiento = {
  id: 0,
  disponible: true,
  imagen: "******************",
    nombre: 'Veterinaria San Martín',
    telefono: '3511234567',
    email: 'info@veterinariasanmartin.com',
    ubicacion: 'Av. San Martín 1234, Córdoba, Argentina',
    latitud: -31.4201,
    longitud: -64.1888,
    horario: 'Lunes a Sábado 8:00 - 20:00',
    especialidades: ["cirujia"],
    especialidades: ['Perros', 'Gatos', 'Exóticos']
  }; */