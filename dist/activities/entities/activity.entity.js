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
exports.ActivitySchema = exports.Activity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const location_entity_1 = require("../../locations/entities/location.entity");
let Activity = class Activity {
};
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }),
    __metadata("design:type", location_entity_1.Location)
], Activity.prototype, "locationID", void 0);
__decorate([
    mongoose_1.Prop([String]),
    __metadata("design:type", Array)
], Activity.prototype, "bookedBy", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Activity.prototype, "startAvailDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Activity.prototype, "endAvailDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Activity.prototype, "name", void 0);
Activity = __decorate([
    mongoose_1.Schema({ collection: 'activities' })
], Activity);
exports.Activity = Activity;
exports.ActivitySchema = mongoose_1.SchemaFactory.createForClass(Activity);
//# sourceMappingURL=activity.entity.js.map