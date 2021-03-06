import { RoomsModule } from './../rooms/rooms.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { Location, LocationSchema } from './entities/location.entity';

@Module({
  imports: [
    RoomsModule, 
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])
  ],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
