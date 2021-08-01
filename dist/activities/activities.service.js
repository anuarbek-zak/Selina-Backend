"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const activity_entity_1 = require("./entities/activity.entity");
let ActivitiesService = class ActivitiesService {
    constructor(activityModel) {
        this.activityModel = activityModel;
    }
    create(createActivityDto) {
        return 'This action adds a new activity';
    }
    findAll(locationID) {
        let filter = {};
        if (locationID) {
            filter = { locationID: new mongoose_2.Types.ObjectId(locationID) };
        }
        return this.activityModel.find(filter);
    }
    findOne(id) {
        return `This action returns a #${id} activity`;
    }
    update(id, updateActivityDto) {
        return `This action updates a #${id} activity`;
    }
    remove(id) {
        return `This action removes a #${id} activity`;
    }
    async book(id) {
        const activity = await this.activityModel.findById(id);
        activity.bookedBy.push('user_id_here');
        await activity.save();
        return { message: 'Thank you for booking!' };
    }
};
ActivitiesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(activity_entity_1.Activity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map