import { Document } from 'mongoose';
export declare type LocationDocument = Location & Document;
export declare class Location {
    country: string;
    city: string;
}
export declare const LocationSchema: import("mongoose").Schema<Document<Location, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
