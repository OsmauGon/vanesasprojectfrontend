import { useEffect, useState } from "react";
import type { Service } from "../types/service-type";
import { servicesGet } from "../backend-endpoints";

interface UseServiceReturn {
    data: Service[];
    isLoading: boolean;
    error: string | null;
    refetch: ()=> void
}

/* export const fakeServices: Service[] =[
  { 
      id: 100, 
      nombre: "Universidad Canon", 
      imagenLogo: "img/???????????", 
      telefono: "22332323232323", 
    redSocial: "@petlovers",
    contacto: "Luciano Pereyra",
    topico: "Entrenamiento Canino",
    descripcion: "Entrenamiento calistenico para perros que sirvan en las fuerzas policiacas",
    clase: "SERVICIO"
    },
  { 
      id: 101, 
      nombre: "Universidad Canon", 
      imagenLogo: "img/???????????", 
      telefono: "22332323232323", 
    redSocial: "@petlovers",
    contacto: "Luciano Pereyra",
    topico: "Entrenamiento Canino",
    descripcion: "Entrenamiento calistenico para perros que sirvan en las fuerzas policiacas",
    clase: "PRODUCTO"
    },
]; */

export const useServices = (): UseServiceReturn =>{
    const [data, setData] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchPosts = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          // 👇 Cambiá esta URL por tu endpoint real
          const response = await fetch(servicesGet);
          
          if (!response.ok ) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          
          const result = await response.json();
          setData(result.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
          console.error('Error fetching missing posts:', err);
          //setData(fakeServices)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      },[]);
    
      return { data, isLoading, error, refetch: fetchPosts };
    };