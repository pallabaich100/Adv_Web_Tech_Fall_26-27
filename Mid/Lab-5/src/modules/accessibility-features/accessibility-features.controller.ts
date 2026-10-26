
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AccessibilityFeaturesService } from './accessibility-features.service';
import { CreateAccessibilityFeatureDto } from './dto/create-accessibility-feature.dto';

@Controller('accessibility-features')
export class AccessibilityFeaturesController {
  constructor(private readonly service: AccessibilityFeaturesService) {}

  @Post()
  create(@Body() dto: CreateAccessibilityFeatureDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}

