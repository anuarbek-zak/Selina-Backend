/// <reference types="mongoose" />
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    create(createRoomDto: CreateRoomDto): string;
    findAll(): Promise<Room[]>;
    getAvailable(locationID: string): import("mongoose").Query<import("./entities/room.entity").RoomDocument[], import("./entities/room.entity").RoomDocument, {}, import("./entities/room.entity").RoomDocument>;
    findOne(id: string): string;
    update(id: string, updateRoomDto: UpdateRoomDto): string;
    remove(id: string): string;
    book(id: string): Promise<{
        message: string;
    }>;
}
