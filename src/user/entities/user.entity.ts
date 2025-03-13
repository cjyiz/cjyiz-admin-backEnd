import { Logs } from 'src/logs/entities/logs.entity';
import { Roles } from 'src/rols/entities/roles.enetity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // 用户对其他表一对多
  @OneToMany(() => Logs, (logs) => logs.user)
  @JoinColumn()
  logs: Logs[];

  @ManyToMany(() => Roles, (roles) => roles.user)
  @JoinTable({ name: 'user_roles' })
  roles: Roles[];

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile;
}
