
export interface MissingPost {
  id: number;
  imageUrl: string;
  tipo: 0 | 1 | 2// 0:"extraviado" 1:"encontrado" 2:"adopcion"
  title?: string;
  description?: string;
  location?: string;
  contact?: string;
  createdAt?: Date;
}
