import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export class Nutriente {
    _id?: string;

    @Prop ({required: true})
    id_infonutri: string;

    @Prop({required: true})
    potacio: string

    @Prop({required: true})
    fosforo: string

    @Prop({required: true})
    magnecio: string

    @Prop({required: true})
    calcio: string
    
}

export const NutrienteSchema = SchemaFactory.createForClass (Nutriente);
