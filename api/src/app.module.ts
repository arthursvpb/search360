import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from './infra/database/database.module';
import { SearchController } from './presentation/search.controller';
import { SearchService } from './application/search.service';
import { DuckDuckGoRepository } from './infra/repositories/duckduckgo.repository';
import { CustomRedisModule } from './infra/cache/redis/redis.module';
import { QueryService } from './application/query.service';
import { QueryRepository } from './infra/repositories/query.repository';
import { QueryController } from './presentation/query.controller';

import { SEARCH_PROVIDER } from './shared/constants/providers';

@Module({
  imports: [DatabaseModule, HttpModule, CustomRedisModule],
  controllers: [SearchController, QueryController],
  providers: [
    SearchService,
    QueryRepository,
    QueryService,
    { provide: SEARCH_PROVIDER, useClass: DuckDuckGoRepository },
  ],
  exports: [SEARCH_PROVIDER],
})
export class AppModule {}
