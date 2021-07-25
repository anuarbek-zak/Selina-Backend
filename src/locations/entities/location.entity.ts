import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema({ collection: 'locations' })
export class Location {
  @Prop()
  country: string;

  @Prop()
  city: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);