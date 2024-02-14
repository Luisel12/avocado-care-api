import { PartialType } from "@nestjs/mapped-types";
import { CreateDetallesNutrimentaleDto } from "./create-detalles_nutrimentale.dto";
import { CreateHuertoDto } from "./create-huerto.dto";

export class CreateHuertofullDto extends PartialType(CreateHuertoDto) {

    detallesnutrimentale: CreateDetallesNutrimentaleDto[]

}