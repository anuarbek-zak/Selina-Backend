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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = exports.Room = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const room_type_entity_1 = require("../../room-types/entities/room-type.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
let Room = class Room {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' }),
    __metadata("design:type", room_type_entity_1.RoomType)
], Room.prototype, "typeID", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }),
    __metadata("design:type", location_entity_1.Location)
], Room.prototype, "locationID", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Room.prototype, "bookedBy", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Room.prototype, "startAvailDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Room.prototype, "endAvailDate", void 0);
Room = __decorate([
    mongoose_1.Schema({ collection: 'rooms' })
], Room);
exports.Room = Room;
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(Room);
//# sourceMappingURL=room.entity.js.map