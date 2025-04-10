import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Roles } from 'src/roles/entities/role.entity';
// import { Logs } from 'src/logs/entities/logs.entity';
// 设为全局模块
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Roles])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
