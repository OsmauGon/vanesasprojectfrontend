export interface Blog {
    id: number,
    idOwner: number,
    title: string,
    description: string,
    bigdescription?: string,//porque puede tener o no una descripcion mas grande para ahorrarse el usar un documento
    documentUrl?: string,//Porque puede o no tener para descargar
    imageUrl?: string,//Porque puede o no tener para ver
    videoUrl?: string,//Porque puede o no tener para ver
    state: "ABLE"  | "DISABLE" | "STANDBY" 
}