import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pokemon extends Document {

    @Prop({ required: true, unique: true, index: true })
    name: string;

    @Prop({ required: true, unique: true, index: true })
    pokedexNumber: number;

    @Prop({ type: [String], required: true })
    type: string[];

    @Prop({ required: true })
    height: number;

    @Prop({ required: true })
    weight: number;

    @Prop({ type: [String], default: [] })
    abilities: string[];

    @Prop({ required: true })
    imageUrl: string;

    @Prop({ default: false })
    isLegendary: boolean;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);