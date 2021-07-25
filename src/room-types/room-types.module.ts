import { Module } from '@nestjs/common';
import { RoomTypesService } from './room-types.service';
import { RoomTypesController } from './room-types.controller';
import { RoomType, RoomTypeSchema } from './entities/room-type.entity';
import { MongooseModule } from '@nestjs/mongoose';
console.log('==RoomType.name',RoomType.name)
@Module({
  imports: [MongooseModule.forFeature([{ name: RoomType.name, schema: RoomTypeSchema }])],
  controllers: [RoomTypesController],
  providers: [RoomTypesService],
})
export class RoomTypesModule {}
