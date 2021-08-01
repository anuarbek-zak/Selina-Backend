import * as mongoose from 'mongoose';
import { Location } from '../../locations/entities/location.entity';
export declare type ActivityDocument = Activity & Document;
export declare class Activity {
    locationID: Location;
    bookedBy: string[];
    startAvailDate: Date;
    endAvailDate: Date;
    name: string;
}
export declare const ActivitySchema: mongoose.Schema<mongoose.Document<Activity, any, any>, mongoose.Model<any, any, any>, undefined, any>;
