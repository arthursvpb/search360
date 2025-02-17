import { SearchResult } from '../../domain/entities/search-result.entity';

export interface ISearchProvider {
  search(query: string): Promise<SearchResult[]>;
}
