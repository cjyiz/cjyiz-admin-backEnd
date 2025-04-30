import { IsNumber, IsString } from 'class-validator';

export class CreateNoticeDto {
  //          id: 10,
  // title: 'v2.16.1 版本修复了 WebSocket 重复连接导致的后台线程阻塞问题，优化了通知公告。',
  // type: 1,
  // level: 'L',
  // publisherName: '系统管理员',
  // publishTime: '2024-09-30 17:30',
  // isRead: 0,
  // 通知内容
  @IsString()
  title: string;
  // 通知类型
  @IsNumber()
  type: number;

  // 通知级别
  @IsString()
  level: string;

  // 发布人
  @IsString()
  publisherName: string;

  // 发布时间
  @IsString()
  publishTime: string;

  // 是否已读
  @IsNumber()
  isRead: number;

  // 通知内容
  @IsString()
  content: string;
}
