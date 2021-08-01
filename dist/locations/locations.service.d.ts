import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationDocument } from './entities/location.entity';
import { Model } from 'mongoose';
export declare class LocationsService {
    private locationModel;
    constructor(locationModel: Model<LocationDocument>);
    create(createLocationDto: CreateLocationDto): string;
    findAll(sort: string, filter: string): Promise<LocationDocument[]>;
    findOne(id: number): string;
    update(id: number, updateLocationDto: UpdateLocationDto): string;
    remove(id: number): string;
}
