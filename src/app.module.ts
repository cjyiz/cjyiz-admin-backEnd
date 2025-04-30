import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './user/entities/profile.entity';
import { User } from './user/entities/user.entity';
// import { Logs } from './logs/entities/logs.entity';
import { AuthModule } from './auth/auth.module';
import { CaptchaModule } from './captcha/captcha.module';
import { Logs } from './logs/entities/logs.entity';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/entities/role.entity';
import { MenuModule } from './menu/menu.module';
import { NoticeModule } from './notice/notice.module';
import { Notice } from './notice/entities/notice.entity';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    CatModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'example',
      password: '8560760123cjyiZ@',
      database: 'testdb',
      entities: [Profile, User, Roles, Logs, Notice],
      synchronize: true,
      logging: ['error'],
    }),
    AuthModule,
    CaptchaModule,
    RolesModule,
    MenuModule,
    NoticeModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
