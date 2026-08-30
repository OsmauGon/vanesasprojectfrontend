import { useEffect, useState } from "react";
import type { Publicidad } from "../types/publicidad-type";
import { publicidadesGet } from "../backend-endpoints";

interface UsePublicidadReturn {
    data: Publicidad[];
    isLoading: boolean;
    error: string | null;
    refetch: ()=> void
}



export const usePublicidads = (): UsePublicidadReturn =>{
    const [data, setData] = useState<Publicidad[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchPosts = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
          // 👇 Cambiá esta URL por tu endpoint real
          const response = await fetch(publicidadesGet);
          
          if (!response.ok ) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          
          const result = await response.json();
          setData(result.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
          console.error('Error fetching missing posts:', err);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      },[]);
    
      return { data, isLoading, error, refetch: fetchPosts };
    };