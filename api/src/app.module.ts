import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SearchController } from './presentation/search.controller';
import { SearchService } from './application/search.service';
import { DuckDuckGoRepository } from './infra/repositories/duckduckgo.repository';
import { CustomRedisModule } from './infra/cache/redis/redis.module';

import { SEARCH_PROVIDER } from './shared/constants/providers';

@Module({
  imports: [HttpModule, CustomRedisModule],
  controllers: [SearchController],
  providers: [
    SearchService,
    { provide: SEARCH_PROVIDER, useClass: DuckDuckGoRepository },
  ],
  exports: [SEARCH_PROVIDER],
})
export class AppModule {}
