import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  MaxLength,
  IsMongoId,
} from 'class-validator';

export class CreateMenuDto {
  // 菜单名称
  @IsString()
  @MaxLength(20)
  name: string;

  // 显示顺序
  @IsOptional()
  @IsNumber()
  sort?: number;

  // 父级ID
  @IsOptional()
  // @IsMongoId()
  parentId?: string | number;

  // 菜单类型（M目录 C菜单 F按钮）
  type: number;

  // 图标
  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;

  // 组件地址
  @IsOptional()
  @IsString()
  @MaxLength(50)
  component?: string;

  // 组件名称
  @IsOptional()
  @IsString()
  @MaxLength(50)
  componentName?: string;

  // 重定向
  @IsOptional()
  @IsString()
  @MaxLength(50)
  redirect?: string;

  // 权限类型
  @IsOptional()
  @IsString()
  @MaxLength(50)
  permissionType?: string;

  // 权限编码
  @IsOptional()
  @IsString()
  @MaxLength(50)
  authSymbol?: string;

  // 按钮权限标识
  @IsOptional()
  @IsString()
  perm?: string;

  // 显示排序 asc
  @IsOptional()
  @IsNumber()
  orderWeight?: number;

  // 【目录】只有一个子路由是否始终显示
  @IsOptional()
  @IsNumber()
  alwaysShow?: number;

  // 是否缓存
  @IsOptional()
  @IsNumber()
  keepAlive?: number;

  // 是否隐藏
  @IsOptional()
  @IsNumber()
  visible?: number;

  // 备注
  @IsOptional()
  @IsString()
  remark?: string;

  // 是否新标签页打开
  @IsOptional()
  @IsBoolean()
  createTab?: boolean;

  // 访问路径
  @IsOptional()
  @IsString()
  @MaxLength(50)
  path?: string;
}
