
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateAccessibilityFeatureDto {
  @IsNotEmpty()
  @IsString()
  featureType!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsNotEmpty()
  @IsInt()
  buildingId!: number;
}
