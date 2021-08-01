import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Model, Types } from 'mongoose';
import { Activity, ActivityDocument } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(@InjectModel(Activity.name) private activityModel: Model<ActivityDocument>){}

  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll(locationID: any) {
    let filter = {};
    if(locationID) {
      filter = {locationID: new Types.ObjectId(locationID)}
    }
    return this.activityModel.find(filter);
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }


  async book(id: Types.ObjectId) {
    const activity = await this.activityModel.findById(id);
    activity.bookedBy.push('user_id_here');
    await activity.save();
    return {message: 'Thank you for booking!'}
  }

}
