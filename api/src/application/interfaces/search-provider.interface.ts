import { SearchResult } from '../../domain/search-result.entity';

export interface ISearchProvider {
  search(query: string): Promise<SearchResult[]>;
}
