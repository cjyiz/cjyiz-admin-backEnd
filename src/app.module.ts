import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './user/entities/profile.entity';
import { User } from './user/entities/user.entity';
import { Roles } from './rols/entities/roles.enetity';
// import { Logs } from './logs/entities/logs.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CatModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'testdb',
      entities: [Profile, User, Roles],
      synchronize: true,
      logging: ['error'],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
