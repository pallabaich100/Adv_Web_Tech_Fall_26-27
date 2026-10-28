
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from './entities/building.entity/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building)
    private buildingsRepository: Repository<Building>,
  ) {}

  create(dto: CreateBuildingDto) {
    const building = this.buildingsRepository.create(dto);
    return this.buildingsRepository.save(building);
  }

  findAll() {
    return this.buildingsRepository.find();
  }
}
