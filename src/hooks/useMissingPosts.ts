// src/hooks/useMissingPosts.ts
import { useState, useEffect } from 'react';
import type { MissingPost } from '../types/missingpost-type';


interface UseMissingPostsReturn {
  data: MissingPost[] | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}
const fakeMissingPosts: MissingPost[] = [
  {
    id: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
  {
    id: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
  {
    id: 3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
  {
    id: 4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
  {
    id: 5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
  {
    id: 6,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIeQg4joKUmXRR18S2P-oy6DSzeowr7AyLZ71BiFra78R9WB_YeP8M6JV&s=10",
    contact: "https://www.instagram.com/p/DY1QAHqkroU/?utm_source=ig_web_button_share_sheet"

  },
]

export const useMissingPosts = (): UseMissingPostsReturn => {
  const [data, setData] = useState<MissingPost[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // 👇 Cambiá esta URL por tu endpoint real
      const response = await fetch('https://api.tuveterinaria.com/missing-posts');
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los carteles');
      console.error('Error fetching missing posts:', err);
      setData(fakeMissingPosts)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { data, isLoading, error, refetch: fetchPosts };
};