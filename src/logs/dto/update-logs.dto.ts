import { PartialType } from '@nestjs/mapped-types';
import { CreateLogsDto } from './create-logs.dto';

export class UpdateUserDto extends PartialType(CreateLogsDto) {}
