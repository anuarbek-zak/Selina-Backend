import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Location } from '../../locations/entities/location.entity';

export type ActivityDocument = Activity & Document;

@Schema({ collection: 'activities' })
export class Activity {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Location' })
  locationID: Location;

  @Prop([String])
  bookedBy: string[];

  @Prop()
  startAvailDate: Date;

  @Prop()
  endAvailDate: Date;

  @Prop()
  name: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);