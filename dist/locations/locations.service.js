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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const location_entity_1 = require("./entities/location.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rooms_service_1 = require("../rooms/rooms.service");
let LocationsService = class LocationsService {
    constructor(locationModel, roomsService) {
        this.locationModel = locationModel;
        this.roomsService = roomsService;
    }
    create(createLocationDto) {
        return 'This action adds a new location';
    }
    async findAll(sort, filter) {
        let filterObj = {};
        if (filter) {
            filterObj = { country: { $regex: filter, $options: 'i' } };
        }
        return this.locationModel.find(filterObj).sort({ country: sort }).exec();
    }
    async findTopThree() {
        try {
            return await this.roomsService.getAggregated()
                .match({ bookedBy: { $ne: null } })
                .group({ _id: '$locationID', count: { $sum: 1 } })
                .sort({ count: 'desc' })
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
                .exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Not found');
        }
    }
    findOne(id) {
        return `This action returns a #${id} location`;
    }
    update(id, updateLocationDto) {
        return `This action updates a #${id} location`;
    }
    remove(id) {
        return `This action removes a #${id} location`;
    }
};
LocationsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(location_entity_1.Location.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        rooms_service_1.RoomsService])
], LocationsService);
exports.LocationsService = LocationsService;
//# sourceMappingURL=locations.service.js.map