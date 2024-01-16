import { Enfermedade } from "../entities/enfermedade.entity";



export interface ListResponse{
    detalles: Enfermedade[],
    token: string
}