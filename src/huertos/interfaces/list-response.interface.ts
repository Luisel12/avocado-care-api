import { Huerto } from "../entities/huerto.entity";

export interface ListResponse{
    huertos: Huerto[],
    token: string
}