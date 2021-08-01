/// <reference types="mongoose" />
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    create(createActivityDto: CreateActivityDto): string;
    findAll(locationID: string): import("mongoose").Query<(import("./entities/activity.entity").Activity & Document & import("mongoose").Document<any, any, import("./entities/activity.entity").ActivityDocument>)[], import("./entities/activity.entity").Activity & Document & import("mongoose").Document<any, any, import("./entities/activity.entity").ActivityDocument>, {}, import("./entities/activity.entity").ActivityDocument>;
    findOne(id: string): string;
    update(id: string, updateActivityDto: UpdateActivityDto): string;
    remove(id: string): string;
    book(id: string): Promise<{
        message: string;
    }>;
}
