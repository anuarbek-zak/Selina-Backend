import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location, LocationDocument } from './entities/location.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LocationsService {
  constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>){}

  create(createLocationDto: CreateLocationDto ) {
    return 'This action adds a new location';
  }

  async findAll(sort:string, filter: string): Promise<LocationDocument[]> {
    let filterObj = {};
    if (filter) {
      filterObj = {country: { $regex: filter, $options: 'i'}}
    }
    return this.locationModel.find(filterObj).sort({ country: sort }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
