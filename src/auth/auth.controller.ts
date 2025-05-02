import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  Delete,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninUserDto } from './dto/signin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Hello world';
  }

  @Post('/signin')
  async signin(
    @Session() session: Record<string, any>,
    @Body() dto: SigninUserDto,
  ) {
    const { username, password, captchaKey } = dto;
    console.log('身份验证', dto);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isCaptchaValid = session.captcha && captchaKey === session.captcha;
    if (!isCaptchaValid) {
      return {
        error: '验证码错误',
      };
    }
    const token = await this.authService.signin(username, password);
    return {
      ...token,
    };
  }

  @Delete('logout')
  logout(@Req() req: Request) {
    // // 提取 JWT Token
    console.log('登出信息', req.headers);
    // const token = req.headers.authorization?.split(' ')[1];
    // 如果 Token 存在，清除 JWT Token
    // if (!token) {
    //   // 后面用等redis 存储token
    // }

    // 清除用户信息
    req['user'] = null;
    // 向客户端返回成功的响应
    return {};
  }

  @Post()
  signup(@Body() dto: SigninUserDto) {
    const { username, password } = dto;
    return this.authService.signup(username, password);
  }
}
