import { Inject, Injectable } from '@nestjs/common';
import { ISearchProvider } from './interfaces/search-provider.interface';
import { QueryRepository } from 'src/infra/repositories/query.repository';
import { RedisService } from 'src/infra/cache/redis/redis.service';

import { SEARCH_PROVIDER } from '../shared/constants/providers';

@Injectable()
export class SearchService {
  constructor(
    @Inject(SEARCH_PROVIDER) private readonly searchProvider: ISearchProvider,
    private readonly queryRepository: QueryRepository,
    private readonly redisService: RedisService,
  ) {}

  async performSearch(searchTerm: string) {
    if (!searchTerm) return { message: "You didn't search for anything 🐥" };

    const cachedResults = await this.redisService.get(searchTerm);
    if (cachedResults) return cachedResults;

    const results = await this.searchProvider.search(searchTerm);

    await Promise.all([
      this.redisService.set(searchTerm, JSON.stringify(results)),
      this.queryRepository.saveQuery(searchTerm),
    ]);

    return results;
  }
}
