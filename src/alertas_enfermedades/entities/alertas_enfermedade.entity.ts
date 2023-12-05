import { Prop, SchemaFactory } from "@nestjs/mongoose";
export class AlertasEnfermedade {
    
    _id?: string;

    @Prop({required: true})
    id_Huerto: string

    @Prop({required: true})
    id_Enfermedades: string

    @Prop({required: true})
    Fecha_Alert: Date|null;
}

//poner en cada uno de los entity
export const AlertasEnfermedadesSchema = SchemaFactory.createForClass (AlertasEnfermedade);

