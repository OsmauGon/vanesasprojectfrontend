import { useState, useEffect } from 'react';
import type { Profesional } from '../types/usertype';
import { profesionalesGet } from '../backend-endpoints';

interface UseProfesionalReturn {
    data: Profesional[];
    isLoading: boolean;
    error: string | null;
    refetch: ()=> void
}

export const fakeProfesionals: Profesional[] =[
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Medicina General", ubicacion: "Santiago del Estero 1234", rating: 4.8, disponible: true, imagen: "https://randomuser.me/api/portraits/men/32.jpg", telefono: "1234567891011", hacedomicilio: true, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
  { id: 2, nombre: "Dra. María González", especialidad: "Cirugía Veterinaria", ubicacion: "Las Condes 5678", rating: 4.9, disponible: true, imagen: "https://randomuser.me/api/portraits/women/44.jpg", telefono: "1234567891011", hacedomicilio: true, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
  { id: 3, nombre: "Dr. Carlos López", especialidad: "Odontología", ubicacion: "Providencia 9101", rating: 4.6, disponible: false, imagen: "https://randomuser.me/api/portraits/men/64.jpg", telefono: "1234567891011", hacedomicilio: false, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
  { id: 4, nombre: "Dra. Ana Martínez", especialidad: "Medicina General", ubicacion: "Ñuñoa 1121", rating: 4.7, disponible: true, imagen: "https://randomuser.me/api/portraits/women/68.jpg", telefono: "1234567891011", hacedomicilio: false, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
  { id: 5, nombre: "Dr. Roberto Sánchez", especialidad: "Dermatología", ubicacion: "Vitacura 3141", rating: 4.9, disponible: true, imagen: "https://randomuser.me/api/portraits/men/85.jpg", telefono: "1234567891011", hacedomicilio: false, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
  { id: 6, nombre: "Dra. Laura Torres", especialidad: "Cardiología", ubicacion: "Gascon 5161", rating: 4.8, disponible: false, imagen: "https://randomuser.me/api/portraits/women/12.jpg", telefono: "1234567891011", hacedomicilio: false, email: "emailfalso@gmail.com", practicas: ["Perros","Gatos","Loros"] },
];

export const useProfesionals = (): UseProfesionalReturn =>{
    const [data, setData] = useState<Profesional[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchPosts = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          // 👇 Cambiá esta URL por tu endpoint real
          const response = await fetch(profesionalesGet);
          
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
          console.error('Error fetching missing posts:', err);
          setData(fakeProfesionals)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);
    
      return { data, isLoading, error, refetch: fetchPosts };
    };