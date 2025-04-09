import { Controller, Get, Session } from '@nestjs/common';
import { CaptchaService } from './captcha.service';

@Controller('captcha')
export class CaptchaController {
  constructor(private readonly captchaService: CaptchaService) {}
  @Get()
  getCaptcha(@Session() session: Record<string, string>) {
    const captcha = this.captchaService.getCaptcha();
    // 将验证码存储到session中
    session.captcha = captcha.text;
    return {
      captchaBase64: captcha.base64,
      captchaKey: captcha.text,
    };
  }
}
