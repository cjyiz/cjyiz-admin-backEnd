import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [],
      synchronize: true,
      logging: ['error'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
