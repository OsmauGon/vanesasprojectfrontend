import { useState, useEffect } from 'react';
import type { Event2 } from '../types/calendar-type';
import { eventosGet } from '../backend-endpoints';



interface UseEventReturn {
    data: Event2[];
    isLoading: boolean;
    error: string | null;
    refetch: ()=> void
}
export const fakeEvents: Event2[] = [
        { 
            id: 10, 
            titulo: "Quirofano Movil", 
            fecha: "2026-07-21", 
            hora: "8:00", 
            tipo: "castracion", 
            responsable: "Salud MGP",
            ubicacion: "Sede Zoonosis y Bienestar animal - Canesa y Guanahani", 
            contacto: "https://www.instagram.com/p/Da2qI8UDk-x/?igsh=MTUydXdtd2xrNGFyMA%3D%3D" 
        },
        { 
            id: 11, 
            titulo: "Quirofano Movil", 
            fecha: "2026-07-22", 
            hora: "8:00", 
            tipo: "castracion", 
            responsable: "Salud MGP",
            ubicacion: "Sede Zoonosis y Bienestar animal - Canesa y Guanahani", 
            contacto: "https://www.instagram.com/p/Da2qI8UDk-x/?igsh=MTUydXdtd2xrNGFyMA%3D%3D" 
        },
        { 
            id: 12, 
            titulo: "Quirofano Movil", 
            fecha: "2026-07-23", 
            hora: "8:00", 
            tipo: "castracion", 
            responsable: "Salud MGP",
            ubicacion: "Sede Zoonosis y Bienestar animal - Canesa y Guanahani", 
            contacto: "https://www.instagram.com/p/Da2qI8UDk-x/?igsh=MTUydXdtd2xrNGFyMA%3D%3D" 
        },
        { 
            id: 13, 
            titulo: "Quirofano Movil", 
            fecha: "2026-07-24", 
            hora: "8:00", 
            tipo: "castracion", 
            responsable: "Salud MGP",
            ubicacion: "Sede Zoonosis y Bienestar animal - Canesa y Guanahani", 
            contacto: "https://www.instagram.com/p/Da2qI8UDk-x/?igsh=MTUydXdtd2xrNGFyMA%3D%3D" 
        },
        { id: 17, titulo: "Revisión General", fecha: "2026-08-15", hora: "10:00", tipo: "consulta", responsable: "Dr. Juan Pérez",contacto: "", ubicacion: "" },
        { id: 2, titulo: "Vacuna Antirrábica", fecha: "2026-09-15", hora: "11:30", tipo: "vacuna", responsable: "Dra. María González",contacto: "", ubicacion: "" },
        { id: 3, titulo: "Limpieza Dental", fecha: "2026-08-20", hora: "14:00", tipo: "cirujia", responsable: "Dr. Carlos López",contacto: "", ubicacion: "" },
        { id: 4, titulo: "Chequeo Mensual", fecha: "2026-07-25", hora: "09:00", tipo: "consulta", responsable: "Dr. Roberto Sánchez",contacto: "", ubicacion: "" },
        { id: 5, titulo: "Chequeo Mensual", fecha: "2026-07-25", hora: "09:00", tipo: "consulta", responsable: "Dr. Roberto Sánchez",contacto: "", ubicacion: "" },
]

export const useEvents = (): UseEventReturn =>{
    const [data, setData] = useState<Event2[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
            
    const fetchPosts = async () => {
      console.log(data)
      if(data.length !=0) return
        setIsLoading(true);
        setError(null);
        
        try {
          // 👇 Cambiá esta URL por tu endpoint real
          const response = await fetch(eventosGet);
                  
                  if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                  }
                  
                  const result = await response.json();
                  setData(result);
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
                  console.error('Error fetching missing posts:', err);
                  setData(fakeEvents)
                } finally {
                  setIsLoading(false);
                }
              };
            
              useEffect(() => {
                fetchPosts();
              }, []);
            
              return { data, isLoading, error, refetch: fetchPosts };
}