
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityFeaturesController } from './accessibility-features.controller';
import { AccessibilityFeaturesService } from './accessibility-features.service';
import { AccessibilityFeature } from './entities/accessibility-feature.entity/accessibility-feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessibilityFeature])],
  controllers: [AccessibilityFeaturesController],
  providers: [AccessibilityFeaturesService],
})
export class AccessibilityFeaturesModule {}

