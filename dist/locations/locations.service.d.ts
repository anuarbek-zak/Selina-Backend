import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationDocument } from './entities/location.entity';
import { Model } from 'mongoose';
import { RoomsService } from 'src/rooms/rooms.service';
export declare type LocationWithCount = {
    count: number;
    location: [LocationDocument];
};
export declare class LocationsService {
    private locationModel;
    private readonly roomsService;
    constructor(locationModel: Model<LocationDocument>, roomsService: RoomsService);
    create(createLocationDto: CreateLocationDto): string;
    findAll(sort: string, filter: string): Promise<LocationDocument[]>;
    findTopThree(): Promise<LocationWithCount[]>;
    findOne(id: number): string;
    update(id: number, updateLocationDto: UpdateLocationDto): string;
    remove(id: number): string;
}
