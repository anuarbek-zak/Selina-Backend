import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Model, Types } from 'mongoose';
import { Activity, ActivityDocument } from './entities/activity.entity';
export declare class ActivitiesService {
    private activityModel;
    constructor(activityModel: Model<ActivityDocument>);
    create(createActivityDto: CreateActivityDto): string;
    findAll(locationID: any): import("mongoose").Query<(Activity & Document & import("mongoose").Document<any, any, ActivityDocument>)[], Activity & Document & import("mongoose").Document<any, any, ActivityDocument>, {}, ActivityDocument>;
    findOne(id: number): string;
    update(id: number, updateActivityDto: UpdateActivityDto): string;
    remove(id: number): string;
    book(id: Types.ObjectId): Promise<{
        message: string;
    }>;
}
