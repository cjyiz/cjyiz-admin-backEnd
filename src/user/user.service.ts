import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import * as argon2 from 'argon2';

import { User } from './entities/user.entity';
import { Roles } from 'src/roles/entities/role.entity';
// import { Logs } from 'src/logs/entities/logs.entity';
// import { Roles } from 'src/rols/entities/roles.enetity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    // @InjectRepository(Logs) private readonly logsRepository: Repository<Logs>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}
  async create(user: Partial<User>) {
    console.log('cjyiz创建用户成功3', user?.username);
    if (!user.roles) {
      const role = await this.rolesRepository.findOne({ where: { id: 2 } });
      if (role) {
        user.roles = [role];
      }
    }

    if (user.roles instanceof Array && typeof user.roles[0] === 'number') {
      user.roles = await this.rolesRepository.find({
        where: {
          id: In(user.roles),
        },
      });
    }

    const userTmp = this.userRepository.create(user);
    // 使用argon2加密
    userTmp.password = await argon2.hash(userTmp.password);
    const res = await this.userRepository.save(userTmp);
    return res;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  find(username: string) {
    return this.userRepository.findOne({
      where: { username },
      relations: ['roles'],
    });
  }

  async update(id: any, user: Partial<User>) {
    const userTemp = await this.findProfile(parseInt(id));
    if (!userTemp) return;
    const newUser = this.userRepository.merge(userTemp, user);
    return this.userRepository.save(newUser);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    console.log('cjyiz删除查询', user);
    if (!user) {
      return;
    }
    return this.userRepository.remove(user);
  }

  findProfile(id: number) {
    console.log('cjyiz查询profile', id);
    return this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        profile: true,
      },
    });
  }

  findUserLogs(id: number) {
    console.log('cjyizid', id);
    // const user = await this.findOne(id);
    return null;
  }
}
