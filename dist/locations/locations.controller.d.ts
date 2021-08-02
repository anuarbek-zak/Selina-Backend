import { LocationsService, LocationWithCount } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationDocument } from './entities/location.entity';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(createLocationDto: CreateLocationDto): string;
    findAll(sort?: string, filter?: string): Promise<LocationDocument[]>;
    findTopThree(id: string): Promise<LocationWithCount[]>;
    findOne(id: string): string;
    update(id: string, updateLocationDto: UpdateLocationDto): string;
    remove(id: string): string;
}
