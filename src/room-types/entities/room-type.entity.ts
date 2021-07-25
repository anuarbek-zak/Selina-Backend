import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomTypeDocument = RoomType & Document;

@Schema({ collection: 'room-types' })
export class RoomType {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);