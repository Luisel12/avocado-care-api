import { Enfermedade } from "../entities/enfermedade.entity";

export interface EnfermedadesResponse{
    enfermedades : Enfermedade,
    token: string
}