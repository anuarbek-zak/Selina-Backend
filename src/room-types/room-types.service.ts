import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { RoomType, RoomTypeDocument } from './entities/room-type.entity';
import { RoomsService } from '../rooms/rooms.service';
import { Types } from 'mongoose';

@Injectable()
export class RoomTypesService {
  constructor(
    @InjectModel(RoomType.name) private roomTypeModel: Model<RoomTypeDocument>,
    private readonly roomsService: RoomsService
    ){}

  create(createRoomTypeDto: CreateRoomTypeDto) {
    return 'This action adds a new roomType';
  }

  async findAll(): Promise<RoomTypeDocument[]> {
    return this.roomTypeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} roomType`;
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return `This action updates a #${id} roomType`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomType`;
  }

  async getAvailable(locationID: Types.ObjectId): Promise<RoomTypeDocument[]> {
    try {
      const availRoomTypesIDs = await this.roomsService.getAvailable(locationID).distinct('typeID');
      return this.roomTypeModel.find({ '_id': { $in: availRoomTypesIDs }});
    } catch (error) {
      throw new NotFoundException('Wrong location id')
    }
    return [];
  }
}
