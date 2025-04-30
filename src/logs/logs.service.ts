export class LogsService {
  // constructor(private readonly logsService:logsService) {}
  create(createLogsDto: any) {
    return 'This action adds a new logs';
  }

  findAll() {
    return `This action returns all logs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logs`;
  }

  update(id: number, updateLogsDto: any) {
    return `This action updates a #${id} logs`;
  }

  remove(id: number) {
    return `This action removes a #${id} logs`;
  }
}
