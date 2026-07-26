import { useState, useEffect } from 'react';
import type { Establishment } from '../types/establishment-type';
import { establecimientosGet } from '../backend-endpoints';

interface UseEstablishmentReturn {
    data: Establishment[];
    isLoading: boolean;
    error: string | null;
    refetch: ()=> void
}


export const fakeEstablishments: Establishment[] = [
  { 
    id: 100,
    nombre: "Animal care",
    especialidades: ["Medicina Felina"],
    ubicacion: "San Juan 2684",
    disponible: true,
    imagen: "img/localanapaula.png",
    telefono:["2234386829"],
    email: undefined,
    latitud: -37.999198,
    longitud: -57.569344,
    profesionalesVinculados: ["Ana Paula Carou"],
    horario: "07 a 18",
    tienelaboratorio: true,
    tienepetshop: true,
    tienepeluqueria: true,
    tienequirofano: true,
    practicas: [
      "Internacion",
      "Medicina Felina",
      "Clinica quirúrgica de tejidos blandos",
      "Medicina interna de pequeños animales",
      "Castracion",
      "Farmacia veterinaria"
    ].join(' - '),
    //otro atributo
    badges: ["laboratorio",
    "petshop",
    "peluqueria",
    "quirofano",]
 },
  { 
    id: 1,
    nombre: "El club de las mascotas",
    especialidades: ["Medicina General"],
    ubicacion: "Santiago del Estero 1234",
    disponible: true,
    imagen: "img/elclub.jpg",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
    profesionalesVinculados: ["Juan Perez","Sebastian Stan","Idris Elba"],
    horario: "07 a 18",
    tienelaboratorio: true,
    tienepetshop: true,
    tienepeluqueria: true,
    tienequirofano: true,
    practicas: [
  "Clínica médica",
  "Clinica quirúrgica de tejidos blandos",
  "Cirugia cardiotoraxica",
  "Cirugía laparoscópica",
  "Laboratorio de análisis clinicos",
  "Diagnóstico por imágenes ( rx y ecografía)",
  "Medicina felina",
  "Banco de Sangre y medicina transfusional",
  "Farmacia veterinaria"
    ].join(' - '),
    //otro atributo
    badges: ["laboratorio",
    "petshop",
    "peluqueria",
    "quirofano",]
 },
  { 
    id: 2,
    nombre: "Animales Sueltos",
    especialidades: ["Cirugía Veterinaria"],
    ubicacion: "Las Condes 5678",
    disponible: true,
    imagen: "img/animalessueltos.jpg",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
   
   profesionalesVinculados: ["Juan Perez","Sebastian Stan","Idris Elba"],
   horario: "07 a 18",
   tienequirofano: true,
   tienelaboratorio: true,
   tieneinternacion: true,
    practicas: [
  "Laboratorio de análisis clinicos",
  "Diagnóstico por imágenes ( rx y ecografía)",
  "Banco de Sangre y medicina transfusional",
  "Farmacia veterinaria"
    ].join(' - '),
   //otro atributo
   badges: ["quirofano",
   "laboratorio",
   "internacion",]
     },
  { id: 3,
    nombre: "All Pets",
    especialidades: ["Odontología"],
    ubicacion: "Providencia 9101",
    disponible: true,
    imagen: "img/allpets.png",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
   
   profesionalesVinculados: ["Juan Perez","Sebastian Stan","Idris Elba"],
   horario: "07 a 18",
   tienepetshop: true,
    practicas: [
      "Jugueteria canina",
      "Farmacia veterinaria"
    ].join(' - '),
   //otro atributo
   badges: ["petshop"]
     },
  { id: 4,
    nombre: "Kidogo",
    especialidades: ["Medicina General"],
    ubicacion: "Ñuñoa 1121",
    disponible: true,
    imagen: "img/kidogo.jpg",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
   
   profesionalesVinculados: ["Juan Perez","Sebastian Stan","Idris Elba"],
   horario: "07 a 18",
   tienepeluqueria: true,
   tienepetshop: true,
    practicas: [
    "Clínica médica",
    "Medicina felina",
    "Farmacia veterinaria"
      ].join(' - '),
   //otro atributo
   badges: ["peluqueria",
   "petshop",]
     },
  { id: 5,
    nombre: "Maule Sur",
    especialidades: ["Dermatología"],
    ubicacion: "Vitacura 3141",
    disponible: true,
    imagen: "img/maulesur.png",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
   
   profesionalesVinculados: ["Juan Perez","Sebastian Stan","Idris Elba"],
   horario: "07 a 18",
   tienelaboratorio: true,
   tienepetshop: true,
    practicas: [
  "Clínica médica",
  "Clinica quirúrgica de tejidos blandos",
  "Cirugia cardiotoraxica",
  "Cirugía laparoscópica",
  "Laboratorio de análisis clinicos",
  "Diagnóstico por imágenes ( rx y ecografía)",
  "Medicina felina",
  "Banco de Sangre y medicina transfusional",
  "Farmacia veterinaria"
    ].join(' - '),
   //otro atributo
   badges: ["laboratorio",
   "petshop"]
     },
  { 
    id: 6,
    nombre: "Vet-Can",
    especialidades: ["Cardiología"],
    ubicacion: "Gascon 5161",
    disponible: false,
    imagen: "img/vetcan.png",
    telefono:["1234567891011"],
    email: "emailfalsogmail.com",
    latitud: 123456789,
    longitud: 123456789,
    profesionalesVinculados: ["John Wick", "Cindy Campbell", "Pedro Pascal"], 
    horario: "07 a 18",
    haceurgencias: true,
    tienelaboratorio: true,
    practicas: [
  "Clínica médica",
  "Clinica quirúrgica de tejidos blandos",
  "Cirugia cardiotoraxica",
  "Cirugía laparoscópica",
  "Laboratorio de análisis clinicos",
  "Diagnóstico por imágenes ( rx y ecografía)",
  "Medicina felina",
  "Banco de Sangre y medicina transfusional",
  "Farmacia veterinaria"
    ].join(' - '),
    //otro atributo
    badges: ["urgencias",
    "laboratorio",]
    },
    
];

export const useEstablishments =(): UseEstablishmentReturn => {
    const [data, setData] = useState<Establishment[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
        
        const fetchPosts = async () => {
          console.log(data)
          if(data.length !=0) return
            setIsLoading(true);
            setError(null);
            
            try {
              // 👇 Cambiá esta URL por tu endpoint real
              const response = await fetch(establecimientosGet);
              
              if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
              }
              
              const result = await response.json();
              setData(result);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
              console.error('Error fetching missing posts:', err);
              setData(fakeEstablishments)
            } finally {
              setIsLoading(false);
            }
          };
        
          useEffect(() => {
            fetchPosts();
          }, []);
        
          return { data, isLoading, error, refetch: fetchPosts };
}