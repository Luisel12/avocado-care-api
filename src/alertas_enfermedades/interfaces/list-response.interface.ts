import { Enfermedade } from "src/enfermedades/entities/enfermedade.entity";


export interface ListResponse{
    alertas: Enfermedade[],
    token: string
}