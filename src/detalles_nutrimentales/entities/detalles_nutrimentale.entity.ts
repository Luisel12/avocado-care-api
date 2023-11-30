import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()

export class DetallesNutrimentale {

    _id?: string;
 
    @Prop ({ required: true })
    id_Nutrientes: string
   
    @Prop ({ required: true })
    id_Huerto: string
   
    @Prop ({ required: true })
    id_infonutri: string

    @Prop ({ required: true})
    Fecha: Date;


}

//poner en cada uno de los entity
export const DetallesNutrimentaleSchema = SchemaFactory.createForClass ( DetallesNutrimentale );
