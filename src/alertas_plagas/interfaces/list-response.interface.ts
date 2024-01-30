import { Plagas } from "src/plagas/entities/plagas.entity";


export interface ListResponse{
    plagas: Plagas[],
    token: string
}