import { Controller, Get, Post, Body, Session } from '@nestjs/common';
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isCaptchaValid = session.captcha && captchaKey === session.captcha;
    if (!isCaptchaValid) {
      return {
        error: '验证码错误',
      };
    }
    const token = await this.authService.signin(username, password);
    return {
      access_token: token,
    };
  }

  @Post()
  signup(@Body() dto: SigninUserDto) {
    const { username, password } = dto;
    return this.authService.signup(username, password);
  }
}
