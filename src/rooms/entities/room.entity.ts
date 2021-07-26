import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { RoomType } from '../../room-types/entities/room-type.entity';
import { Location } from '../../locations/entities/location.entity';

export type RoomDocument = Room & Document;

@Schema({ collection: 'rooms' })
export class Room {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' })
  typeID: RoomType;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Location' })
  locationID: Location;

  @Prop()
  bookedBy: string;

  @Prop()
  startAvailDate: Date;

  @Prop()
  endAvailDate: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);