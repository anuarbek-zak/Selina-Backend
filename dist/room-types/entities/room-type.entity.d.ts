import { Document } from 'mongoose';
export declare type RoomTypeDocument = RoomType & Document;
export declare class RoomType {
    name: string;
    price: number;
}
export declare const RoomTypeSchema: import("mongoose").Schema<Document<RoomType, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
