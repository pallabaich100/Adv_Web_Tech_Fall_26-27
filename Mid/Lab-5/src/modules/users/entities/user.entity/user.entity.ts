import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'full_name', length: 100 })
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ default: 'student' })
  role!: string;
}

