import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Plagas {
    _id?: string;

    @Prop({required: true})
    NomPlag: string;

    @Prop({required: true})
    Img: string;

    @Prop({required: true})
    InfoPlag: string;

    @Prop({required: true})
    RecomendacionPlag: string;
}
//poner en cada uno de los entity
export const PlagasSchema = SchemaFactory.createForClass (Plagas);

