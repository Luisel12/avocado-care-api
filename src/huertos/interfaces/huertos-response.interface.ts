import { Huerto } from "../entities/huerto.entity";

export interface HuertoResponse{
    huerto : Huerto,
    token: string
}