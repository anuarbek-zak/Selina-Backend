import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModule } from './rooms/rooms.module';
import { LocationsModule } from './locations/locations.module';
import { RoomTypesModule } from './room-types/room-types.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Anuarbek:12345@selina.svf8o.mongodb.net/selina_backend?retryWrites=true&w=majority'), RoomsModule, LocationsModule, RoomTypesModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
