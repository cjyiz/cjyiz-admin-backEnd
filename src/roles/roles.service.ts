import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles) private roleRepository: Repository<Roles>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    console.log('创建角色', createRoleDto);
    const role = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(role);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id);
    if (!role) return;
    const newRole = this.roleRepository.merge(role, updateRoleDto);
    return this.roleRepository.save(newRole);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
