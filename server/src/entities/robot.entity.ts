import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Robot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  x: number;

  @Column()
  y: number;

  @Column()
  facing: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  action: string;

  @CreateDateColumn()
  timestamp: Date;
}