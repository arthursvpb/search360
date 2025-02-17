import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ISearchProvider } from '../../application/interfaces/search-provider.interface';
import { SearchResult } from '../../domain/search-result.entity';

type DuckDuckGoTopic = {
  FirstURL: string;
  Text: string;
};

type DuckDuckGoResponse = {
  RelatedTopics: DuckDuckGoTopic[];
};

@Injectable()
export class DuckDuckGoRepository implements ISearchProvider {
  private readonly API_URL = 'https://api.duckduckgo.com/';

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<SearchResult[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<DuckDuckGoResponse>(this.API_URL, {
          params: { q: query, format: 'json' },
        }),
      );

      const { RelatedTopics: topics } = response.data;

      return topics
        .filter((item) => item.FirstURL && item.Text)
        .map((item) => new SearchResult(item.Text, item.FirstURL));
    } catch (error) {
      console.error(`❌ Error fetching search results:`, error);
      throw new Error('Failed to retrieve search results from DuckDuckGo.');
    }
  }
}
