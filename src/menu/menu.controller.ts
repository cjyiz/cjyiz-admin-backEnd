import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('/routes')
  getRoutes(@Req() request) {
    const userId = request['user']?.userId || '';
    const routes = this.menuService.getRoutes(userId);
    return routes;
  }
}
