export interface HttpResponse<T> {
  message?: string;
  data?: T;
  pagination?: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export type AnimeType =
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'ona'
  | 'music'
  | 'cm'
  | 'pv'
  | 'tv_special';

export type AnimeStatus = 'airing' | 'complete' | 'upcoming';

export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export enum EnumQueryParam {
  PAGE = 'page',
  QUERY = 'query',
}
