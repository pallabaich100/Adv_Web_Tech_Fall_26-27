import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('accessibility_features')
export class AccessibilityFeature {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'feature_type' })
  featureType!: string;

  @Column({ default: 'Available' })
  status!: string;

  @Column({ name: 'building_id', type: 'int' })
  buildingId!: number;
}

