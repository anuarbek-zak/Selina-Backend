"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypesModule = void 0;
const common_1 = require("@nestjs/common");
const room_types_service_1 = require("./room-types.service");
const room_types_controller_1 = require("./room-types.controller");
const rooms_module_1 = require("../rooms/rooms.module");
const room_type_entity_1 = require("./entities/room-type.entity");
const mongoose_1 = require("@nestjs/mongoose");
let RoomTypesModule = class RoomTypesModule {
};
RoomTypesModule = __decorate([
    common_1.Module({
        imports: [
            rooms_module_1.RoomsModule,
            mongoose_1.MongooseModule.forFeature([{ name: room_type_entity_1.RoomType.name, schema: room_type_entity_1.RoomTypeSchema }])
        ],
        controllers: [room_types_controller_1.RoomTypesController],
        providers: [room_types_service_1.RoomTypesService],
    })
], RoomTypesModule);
exports.RoomTypesModule = RoomTypesModule;
//# sourceMappingURL=room-types.module.js.map