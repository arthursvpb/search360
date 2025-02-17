import { Inject, Injectable } from '@nestjs/common';
import { ISearchProvider } from './interfaces/search-provider.interface';
import { SEARCH_PROVIDER } from './constants/providers';

@Injectable()
export class SearchService {
  constructor(
    @Inject(SEARCH_PROVIDER) private readonly searchProvider: ISearchProvider,
  ) {}

  async performSearch(query: string) {
    if (!query) return { message: "You didn't search for anything 🐥" };
    return this.searchProvider.search(query);
  }
}
