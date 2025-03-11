import { Controller, Get, Header, Param, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Redirect('https://nest.nodejs.cn', 301)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getHello2(@Param() params: any): string {
    console.log(`cjyiz${params?.id}`);
    return '重定向的路由';
  }

  @Post('addUser')
  @Header('Cache-Control', 'a')
  addUser(): string {
    return '新增用户';
  }

  // @Get('red')
  // @Redirect('https://nest.nodejs.cn', 301)
}
