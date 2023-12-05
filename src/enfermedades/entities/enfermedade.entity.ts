import { SchemaFactory } from "@nestjs/mongoose";

export class Enfermedade {
    _id?: string;

}

export const EnfermedadeSchema = SchemaFactory.createForClass (Enfermedade);