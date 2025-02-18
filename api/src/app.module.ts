import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SearchController } from './presentation/search.controller';
import { SearchService } from './application/search.service';
import { DuckDuckGoRepository } from './infra/repositories/duckduckgo.repository';
import { CustomRedisModule } from './infra/cache/redis/redis.module';
import { QueryRepository } from './infra/repositories/query.repository';

import { SEARCH_PROVIDER } from './shared/constants/providers';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [DatabaseModule, HttpModule, CustomRedisModule],
  controllers: [SearchController],
  providers: [
    SearchService,
    QueryRepository,
    { provide: SEARCH_PROVIDER, useClass: DuckDuckGoRepository },
  ],
  exports: [SEARCH_PROVIDER],
})
export class AppModule {}
