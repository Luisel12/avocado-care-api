import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Huerto {

    _id?: string;

    @Prop ({ required: true })
    id_Usuario: string

    @Prop ({ required: true })
    Nombre: string;

    @Prop ({ required: true })
    Latitud : number;

    @Prop ({ required: true })
    Longitud : number;

    @Prop ({ required: true })
    Tipo_Suelo: string;

    @Prop ({ required: true })
    Variedad: string;

    @Prop ({ required: true })
    MercadoOBJ: string;

    @Prop ({ required: true })
    Organico: string;

    @Prop ({ required: true })
    EtapaFenologica: string;

    @Prop ({ required: true })
    Tipo_Riego: string;

}

//poner en cada uno de los entity
export const HuertoSchema = SchemaFactory.createForClass ( Huerto );