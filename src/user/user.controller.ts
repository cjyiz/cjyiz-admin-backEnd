import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { AdminGuard } from 'src/gurads/admin.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/gurads/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/addUser')
  addUser(@Body(CreateUserPipe) dto: CreateUserDto): any {
    console.log('新增用户cjyiz', dto);
    const user = dto as User;
    return this.userService.create(user);
  }

  @Get('/findAll')
  findAll() {
    return 'hahah';
    // return this.userService.findAll();
  }

  @Get('/profile')
  async getUserProfile(): Promise<any> {
    const res = await this.userService.findProfile(5);
    console.log('chachu', res);
    return res;
  }

  @Get('/logs')
  getUserLogs(): any {
    return 2;
    // return this.userService.findUserLogs(3);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): any {
    return this.userService.remove(id);
  }

  @Patch('/:id')
  updateUser(
    @Body() dto: any,
    @Param('id', ParseIntPipe) id: number,
    @Req() req,
  ) {
    // if (id === parseInt(req.user?.userId)) {
    const user = dto as User;

    return this.userService.update(id, user);
    // } else {
    //   throw new UnauthorizedException();
    // }
  }

  @Get('/:id')
  @UseGuards(AdminGuard)
  @UseGuards(JwtGuard)
  getUser(@Param('id', ParseIntPipe) id: number): any {
    console.log('cjyiz查询用户2', id);
    return this.userService.findOne(id);
  }
}
