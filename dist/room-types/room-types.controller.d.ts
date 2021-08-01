import { RoomTypesService } from './room-types.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomTypeDocument } from './entities/room-type.entity';
export declare class RoomTypesController {
    private readonly roomTypesService;
    constructor(roomTypesService: RoomTypesService);
    create(createRoomTypeDto: CreateRoomTypeDto): string;
    findAll(): Promise<RoomTypeDocument[]>;
    getAvailable(locationID: string): Promise<RoomTypeDocument[]>;
    findOne(id: string): string;
    update(id: string, updateRoomTypeDto: UpdateRoomTypeDto): string;
    remove(id: string): string;
}
