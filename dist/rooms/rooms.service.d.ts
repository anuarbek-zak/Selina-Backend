import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';
import { Types, Query, Model } from 'mongoose';
export declare class RoomsService {
    private roomModel;
    constructor(roomModel: Model<RoomDocument>);
    create(createRoomDto: CreateRoomDto): string;
    findAll(): Promise<Room[]>;
    findOne(id: number): string;
    update(id: number, updateRoomDto: UpdateRoomDto): string;
    remove(id: number): string;
    book(id: Types.ObjectId): Promise<{
        message: string;
    }>;
    getAvailable(locationID: any): Query<RoomDocument[], RoomDocument>;
    getAggregated(): import("mongoose").Aggregate<any[]>;
}
