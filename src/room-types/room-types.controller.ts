import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { RoomTypesService } from './room-types.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';
import { Types } from 'mongoose';
import { RoomTypeDocument } from './entities/room-type.entity';

@Controller('room-types')
export class RoomTypesController {
  constructor(private readonly roomTypesService: RoomTypesService) {}

  @Post()
  create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    return this.roomTypesService.create(createRoomTypeDto);
  }

  @Get()
  findAll(): Promise<RoomTypeDocument[]> {
    return this.roomTypesService.findAll();
  }

  @Get('available')
  getAvailable(@Query('locationID') locationID: string): Promise<RoomTypeDocument[]> {
    return this.roomTypesService.getAvailable(new Types.ObjectId(locationID));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomTypeDto: UpdateRoomTypeDto) {
    return this.roomTypesService.update(+id, updateRoomTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypesService.remove(+id);
  }
}
