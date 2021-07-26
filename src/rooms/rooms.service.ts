import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';
import {Types, Query} from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>){}

  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  async findAll() {
    return this.roomModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }

  async book(id: Types.ObjectId) {
    const room = await this.roomModel.findById(id);
    if(room.bookedBy) {
      return {message: 'This room is no longer available.'}
    } else {
      room.bookedBy = 'user_id_here';
      await room.save();
      return {message: 'Thank you for booking!'}
    }
  }

  getAvailable(locationID): Query<any, any> {
    return this.roomModel.find({locationID: locationID, bookedBy: null});
  }
}
