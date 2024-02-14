import { DetallesNutrimentale } from "../entities/detalles_nutrimentale.entity";

export interface DetallesResponse{
    detallesnutri : DetallesNutrimentale,
    token: string
}