import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('buildings')
export class Building {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column()
  address!: string;

  @Column()
  category!: string;
}