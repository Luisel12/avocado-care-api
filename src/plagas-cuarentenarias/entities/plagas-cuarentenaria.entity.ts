import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class PlagasCuarentenaria {
    _id?: string;

    @Prop({required: true})
    id_Huerto: string

    @Prop({required: true})
    id_Plagas: string
    
    @Prop({required: true})
    Fecha_Ocurre: Date|null;
}

//poner en cada uno de los entity
export const PlagasCuarentenariaSchema = SchemaFactory.createForClass (PlagasCuarentenaria);

