
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessibilityFeature } from './entities/accessibility-feature.entity/accessibility-feature.entity';
import { CreateAccessibilityFeatureDto } from './dto/create-accessibility-feature.dto';

@Injectable()
export class AccessibilityFeaturesService {
  constructor(
    @InjectRepository(AccessibilityFeature)
    private repository: Repository<AccessibilityFeature>,
  ) {}

  create(dto: CreateAccessibilityFeatureDto) {
    const feature = this.repository.create(dto);
    return this.repository.save(feature);
  }

  findAll() {
    return this.repository.find();
  }
}
