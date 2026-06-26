import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Trainer extends Document {

    @Prop({ required: true, index: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    region: string;

    @Prop({ default: 0 })
    badges: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Pokemon' }] })
    pokemons: Types.ObjectId[];
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
