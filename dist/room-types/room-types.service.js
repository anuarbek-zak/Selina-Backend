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
exports.RoomTypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_type_entity_1 = require("./entities/room-type.entity");
const rooms_service_1 = require("../rooms/rooms.service");
let RoomTypesService = class RoomTypesService {
    constructor(roomTypeModel, roomsService) {
        this.roomTypeModel = roomTypeModel;
        this.roomsService = roomsService;
    }
    create(createRoomTypeDto) {
        return 'This action adds a new roomType';
    }
    async findAll() {
        return this.roomTypeModel.find().exec();
    }
    findOne(id) {
        return `This action returns a #${id} roomType`;
    }
    update(id, updateRoomTypeDto) {
        return `This action updates a #${id} roomType`;
    }
    remove(id) {
        return `This action removes a #${id} roomType`;
    }
    async getAvailable(locationID) {
        try {
            const availRoomTypesIDs = await this.roomsService.getAvailable(locationID).distinct('typeID');
            return this.roomTypeModel.find({ '_id': { $in: availRoomTypesIDs } });
        }
        catch (error) {
            throw new common_1.NotFoundException('Wrong location id');
        }
        return [];
    }
};
RoomTypesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(room_type_entity_1.RoomType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        rooms_service_1.RoomsService])
], RoomTypesService);
exports.RoomTypesService = RoomTypesService;
//# sourceMappingURL=room-types.service.js.map