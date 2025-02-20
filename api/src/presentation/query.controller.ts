import { Controller, Get } from '@nestjs/common';
import { QueryService } from '../application/query.service';

@Controller('history')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Get()
  async getHistory() {
    return this.queryService.getRecentQueries();
  }
}
