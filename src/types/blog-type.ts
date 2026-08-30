export interface Blog {
    id: number,
    idOwner: number,
    title: string,
    description: string,
    documentUrl?: string,//Porque puede o no tener para descargar
    imageUrl?: string,//Porque puede o no tener para ver
    videoUrl?: string,//Porque puede o no tener para ver
    state: "ABLE"  | "DISABLE" | "STANDBY" 
}