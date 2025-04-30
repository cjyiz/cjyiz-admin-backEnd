import { Controller, Get } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}
  @Get('/visit-trend')
  visitTrend() {
    const res = {
      dates: [
        '2024-06-30',
        '2024-07-01',
        '2024-07-02',
        '2024-07-03',
        '2024-07-04',
        '2024-07-05',
        '2024-07-06',
        '2024-07-07',
      ],
      pvList: [1751, 5168, 4882, 5301, 4721, 4885, 1901, 1003],
      uvList: null,
      ipList: [207, 566, 565, 631, 579, 496, 222, 152],
    };
    return res;
  }

  @Get('visit-stats')
  visitStats() {
    const res = {
      todayPvCount: 1629,
      totalPvCount: 286086,
      pvGrowthRate: -0.65,
      todayIpCount: 169,
      totalIpCount: 19985,
      ipGrowthRate: -0.57,
    };
    return res;
  }
}
