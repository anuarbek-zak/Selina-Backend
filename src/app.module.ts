import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModule } from './rooms/rooms.module';
import { LocationsModule } from './locations/locations.module';
import { RoomTypesModule } from './room-types/room-types.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/selina'), RoomsModule, LocationsModule, RoomTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
