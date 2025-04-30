import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Roles } from 'src/roles/entities/role.entity';

export class CreateLogsDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 64)
  password: string;

  roles?: Roles[] | number[];
}
