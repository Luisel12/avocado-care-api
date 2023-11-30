import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class User {
    _id?: string;

    @Prop({ required: true })
    Nombre: string;

    @Prop({ unique: true, required: true })
    Correo: string;

    @Prop({ minlength: 8, required: true })
    Contra: string;

    @Prop({ default: true })
    isActive: boolean;


}

//poner en cada uno de los entity
export const UserSchema = SchemaFactory.createForClass ( User );