import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
  ) {}

  async signin(username: string, password: string) {
    const user = await this.userService.find(username);
    if (!user) {
      throw new ForbiddenException('用户不存在，请注册');
    }

    const isPasswordValid = await argon2.verify(user.password, password);
    console.log('cjyiz验证密码是否有效', isPasswordValid);
    if (!isPasswordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }
    const accessToken = await this.jwt.signAsync(
      {
        username: user.username,
        sub: user.id,
      },
      {
        secret: jwtConstants.secret,
        expiresIn: '600s',
      },
    );

    // 这里验证是否有效
    const payload = await this.jwt.verifyAsync(accessToken, {
      secret: jwtConstants.secret,
    });
    console.log('是否有效', payload);
    return {
      accessToken,
      expiresIn: {
        secret: jwtConstants.secret,
        expiresIn: '600s',
      },
      tokenType: 'Bearer',
      userId: user.id,
    };
  }

  async signup(username: string, password: string) {
    const user = await this.userService.find(username);
    if (user) {
      throw new ForbiddenException('用户已存在');
    }

    const res = await this.userService.create({
      username,
      password,
    });

    return res;
  }
}
