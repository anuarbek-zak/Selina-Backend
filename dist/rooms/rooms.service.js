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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const room_entity_1 = require("./entities/room.entity");
const mongoose_2 = require("mongoose");
let RoomsService = class RoomsService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    create(createRoomDto) {
        return 'This action adds a new room';
    }
    async findAll() {
        return this.roomModel.find().exec();
    }
    findOne(id) {
        return `This action returns a #${id} room`;
    }
    update(id, updateRoomDto) {
        return `This action updates a #${id} room`;
    }
    remove(id) {
        return `This action removes a #${id} room`;
    }
    async book(id) {
        const room = await this.roomModel.findById(id);
        if (room.bookedBy) {
            return { message: 'This room is no longer available.' };
        }
        else {
            room.bookedBy = 'user_id_here';
            await room.save();
            return { message: 'Thank you for booking!' };
        }
    }
    getAvailable(locationID) {
        return this.roomModel.find({ locationID: locationID, bookedBy: null });
    }
    getAggregated() {
        return this.roomModel.aggregate();
    }
};
RoomsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(room_entity_1.Room.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map