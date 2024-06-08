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

export enum EnumQueryParam {
  PAGE = 'page',
  QUERY = 'query',
}

export type SelectOptionType = {
  id: number;
  name: string;
};
