
export interface MissingPost {
  id: number;
  imageUrl: string;
  tipo: "EXTRAVIADO" | "ENCONTRADO" | "ADOPCION"
  title?: string;
  description?: string;
  location?: string;
  contact?: string;
  createdAt?: Date;
}
