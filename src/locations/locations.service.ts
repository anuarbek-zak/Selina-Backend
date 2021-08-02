import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location, LocationDocument } from './entities/location.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomsService } from './../rooms/rooms.service';
  
export type LocationWithCount = {
  count: number;
  location: [LocationDocument];
};

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>,
    private readonly roomsService: RoomsService
    ){}

    
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

  async findTopThree(): Promise<LocationWithCount[]> {
    try{
      return await this.roomsService.getAggregated()
      .match({bookedBy: {$ne: null}})
      .group({ _id: '$locationID', count: { $sum: 1 } })
      .sort({count: 'desc'})
      .limit(3)
      .lookup({
        from: "locations",
        localField: "_id",
        foreignField: "_id",
        as: "location"
      })
      .project({
        _id: 0,
      })
      .exec()
    } catch(error) {
      throw new  NotFoundException('Not found');
    }
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
