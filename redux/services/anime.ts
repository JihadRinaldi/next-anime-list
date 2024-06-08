import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HttpResponse } from '@/types';
import { AnimeGenreResponse, AnimeResponse } from '@/types/animeServiceType';
import { ANIME_BASE_URL } from '@/utils/constants';

import { GetAnimeListParams } from './types/anime';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: ANIME_BASE_URL }),
  endpoints: (builder) => ({
    getAnimeList: builder.query<
      HttpResponse<AnimeResponse[]>,
      GetAnimeListParams
    >({
      query: ({ search, page, order_by, sort, genre }) => {
        const genreParam = genre ? `&genres=${genre}` : '';
        return {
          url: `/anime?q=${search}&page=${page}&limit=20&order_by=${order_by}&sort=${sort}${genreParam}`,
          method: 'GET',
        };
      },
    }),
    getAnimeById: builder.query<HttpResponse<AnimeResponse>, { id: string }>({
      query: (id) => ({
        url: `/anime/${id.id}`,
        method: 'GET',
      }),
    }),
    getAnimeGenres: builder.query<HttpResponse<AnimeGenreResponse[]>, void>({
      query: () => ({
        url: '/genres/anime',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAnimeListQuery,
  useGetAnimeByIdQuery,
  useGetAnimeGenresQuery,
  useLazyGetAnimeByIdQuery,
} = animeApi;
