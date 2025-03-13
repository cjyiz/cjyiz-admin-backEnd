import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  gender: number;
  @Column()
  photo: string;
  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.profile, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
