import { Expose } from 'class-transformer';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Notice {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  title: string;

  @Column()
  type: number;

  @Column()
  level: string;

  @Column()
  publisherName: string;

  @Column()
  publishTime: string;

  @Column()
  isRead: number;
}
