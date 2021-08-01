import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Types } from 'mongoose';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto);
  }

  @Get()
  findAll(@Query('locationID') locationID: string) {
    return this.activitiesService.findAll(locationID);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }

  // should be @Patch, but use @Get only for home assignment
  @Get('book/:id')
  book(@Param('id') id: string) {
    return this.activitiesService.book(new Types.ObjectId(id));
  }
}