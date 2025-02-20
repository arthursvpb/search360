import { Injectable } from '@nestjs/common';
import { QueryRepository } from '../infra/repositories/query.repository';
import { Query } from 'src/domain/entities/query.entity';

@Injectable()
export class QueryService {
  constructor(private readonly queryRepository: QueryRepository) {}

  async getRecentQueries(): Promise<Query[]> {
    return this.queryRepository.findRecentQueries();
  }
}
