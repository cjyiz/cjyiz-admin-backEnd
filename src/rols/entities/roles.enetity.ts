import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.logs)
  @JoinTable({
    name: 'users_roles',
    joinColumns: [{ name: 'rolesId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'userId', referencedColumnName: 'id' }],
    schema: 'testdb',
  })
  user: User;
}
