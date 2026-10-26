
import { Controller, Get, Post, Body } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Post()
  create(@Body() dto: CreateBuildingDto) {
    return this.buildingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.buildingsService.findAll();
  }
}

