import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class AlertasPlagas {
    
    _id?: string;

    @Prop({required: true})
    id_Plagas: string;

    @Prop({required: true})
    mensaje: string;

    @Prop({required: true})
    descripcion: string;
}
//poner en cada uno de los entity
export const AlertasPlagasSchema = SchemaFactory.createForClass (AlertasPlagas);
