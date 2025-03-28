import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
  ) {}

  async signin(username: string, password: string) {
    const user = await this.userService.find(username);
    console.log('cjyiz查出来的数据是什么', user);
    if (!user) {
      throw new ForbiddenException('用户不存在，请注册');
    }
    console.log('校验密码', password);

    const isPasswordValid = await argon2.verify(user.password, password);
    console.log('校验密码是否成功', isPasswordValid);

    if (!isPasswordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }

    return await this.jwt.signAsync(
      {
        username: user.username,
        sub: user.id,
      },
      {
        secret: 'test',
        expiresIn: '60s',
      },
    );
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
