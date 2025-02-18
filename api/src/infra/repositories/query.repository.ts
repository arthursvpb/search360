import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Query } from '../../domain/entities/query.entity';

@Injectable()
export class QueryRepository {
  constructor(
    @InjectRepository(Query)
    private readonly queryRepo: Repository<Query>,
  ) {}

  async saveQuery(searchTerm: string): Promise<Query> {
    const query = this.queryRepo.create({ searchTerm });
    return this.queryRepo.save(query);
  }

  async findRecentQueries(limit: number = 10): Promise<Query[]> {
    return this.queryRepo.find({ order: { createdAt: 'DESC' }, take: limit });
  }
}
