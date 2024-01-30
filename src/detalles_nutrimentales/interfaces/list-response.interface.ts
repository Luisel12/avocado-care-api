
import { DetallesNutrimentale } from "../entities/detalles_nutrimentale.entity";


export interface ListResponse{
    nutrientes: DetallesNutrimentale[],
    token: string
}