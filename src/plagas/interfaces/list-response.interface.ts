import { Plagas } from "../entities/plagas.entity";

export interface ListResponse{
    plagas: Plagas[],
    token: string
}