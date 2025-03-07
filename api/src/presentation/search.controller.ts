import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SearchService } from '../application/search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query('q') query: string) {
    return this.searchService.performSearch(query);
  }

  @Post()
  async searchPost(@Body('query') query: string) {
    return this.searchService.performSearch(query);
  }
}
