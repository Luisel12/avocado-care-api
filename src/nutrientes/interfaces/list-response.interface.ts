import { Nutriente } from "../entities/nutriente.entity";

export interface ListResponse{
    nutrientes: Nutriente[],
    token: string
}

