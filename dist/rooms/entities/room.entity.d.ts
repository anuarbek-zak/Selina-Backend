import * as mongoose from 'mongoose';
import { RoomType } from '../../room-types/entities/room-type.entity';
import { Location } from '../../locations/entities/location.entity';
export declare type RoomDocument = Room & Document;
export declare class Room {
    typeID: RoomType;
    locationID: Location;
    bookedBy: string;
    startAvailDate: Date;
    endAvailDate: Date;
}
export declare const RoomSchema: mongoose.Schema<mongoose.Document<Room, any, any>, mongoose.Model<any, any, any>, undefined, any>;
