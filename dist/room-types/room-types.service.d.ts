import { Model } from 'mongoose';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomTypeDocument } from './entities/room-type.entity';
import { RoomsService } from '../rooms/rooms.service';
import { Types } from 'mongoose';
export declare class RoomTypesService {
    private roomTypeModel;
    private readonly roomsService;
    constructor(roomTypeModel: Model<RoomTypeDocument>, roomsService: RoomsService);
    create(createRoomTypeDto: CreateRoomTypeDto): string;
    findAll(): Promise<RoomTypeDocument[]>;
    findOne(id: number): string;
    update(id: number, updateRoomTypeDto: UpdateRoomTypeDto): string;
    remove(id: number): string;
    getAvailable(locationID: Types.ObjectId): Promise<RoomTypeDocument[]>;
}
