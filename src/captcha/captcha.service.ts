import { Injectable, Session } from '@nestjs/common';
import * as svgCaptcha from 'svg-captcha';
@Injectable()
export class CaptchaService {
  getCaptcha() {
    const captcha = svgCaptcha.create({
      size: 4, //生成几个验证码
      fontSize: 50, //文字大小
      width: 120, //宽度
      height: 48, //高度
      background: '#e4e7ed', //背景颜色
      charPreset: '1234567890',
    });
    const svg = captcha.data;
    const text = captcha.text;
    const base64 = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    return { captcha, base64, text };
  }
}
