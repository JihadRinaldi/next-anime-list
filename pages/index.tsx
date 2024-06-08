import { useCallback, useMemo, useState } from 'react';

import {
  AnimeList,
  AnimeListSkeleton,
  EmptyResult,
  ErrorPage,
  FilterGenre,
  Pagination,
  SortDropdown,
  Text,
} from '@/components';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { useDebounce } from '@/hooks/useDebounce';
import usePaginationAndSearch from '@/hooks/usePaginationAndSearch';
import {
  useGetAnimeGenresQuery,
  useGetAnimeListQuery,
} from '@/redux/services/anime';
import { EnumQueryParam, SelectOptionType } from '@/types';
import { SORT_DIRECTIONS, SORT_OPTIONS } from '@/utils/constants';

const Home = () => {
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);
  const [sortDirection, setSortDirection] = useState(SORT_DIRECTIONS.DESC);
  const [selectedGenre, setSelectedGenre] = useState<SelectOptionType | null>(
    null
  );
  const searchKeyword = useDebounce(search);
  const { toPage, getQuery } = usePaginationAndSearch();

  const currentPage = Number(getQuery<number>(EnumQueryParam.PAGE, 1));

  const {
    data: animeGenresResponse,
    isError: isAnimeGenresError,
    isSuccess,
    isLoading: isAnimeGenreLoading,
  } = useGetAnimeGenresQuery();

  const {
    data: animeListResponse,
    error,
    isLoading,
    isFetching,
  } = useGetAnimeListQuery({
    search: searchKeyword,
    page: currentPage,
    order_by: sortOption,
    sort: sortDirection,
    genre: selectedGenre ? `${selectedGenre.id}` : '',
  });

  const handleChangeKeyword = (input: string) => {
    setSearch(input);
    toPage(1);
  };

  const handleChangeGenre = (selectedGenre: SelectOptionType | null) => {
    setSelectedGenre(selectedGenre);
  };

  const handleChangeSortDirection = () => {
    if (sortDirection === SORT_DIRECTIONS.ASC) {
      setSortDirection(SORT_DIRECTIONS.DESC);
    } else {
      setSortDirection(SORT_DIRECTIONS.ASC);
    }
  };

  const displayLoader = () => {
    if (isFetching || isLoading) {
      return <AnimeListSkeleton />;
    }
    return null;
  };

  const displayError = () => {
    if (error) {
      return <ErrorPage />;
    }
    return null;
  };

  const displayAnimeList = () => {
    if (animeListResponse?.data?.length) {
      return (
        <>
          <AnimeList animeList={animeListResponse.data} />
          <Pagination
            currentPage={currentPage}
            totalPages={animeListResponse?.pagination?.last_visible_page || 0}
            onPageChange={toPage}
          />
        </>
      );
    }
    return null;
  };

  const animeGenres = useMemo(() => {
    if (animeGenresResponse?.data) {
      return animeGenresResponse.data.map((genre) => ({
        id: genre.mal_id,
        name: genre.name,
      }));
    }
    return [];
  }, [animeGenresResponse]);

  const displayEmptyResult = useCallback(() => {
    if (
      !isLoading &&
      !isFetching &&
      isSuccess &&
      !animeListResponse?.data?.length
    ) {
      return <EmptyResult message="Anime Not Found" />;
    }
    return null;
  }, [animeListResponse, isFetching, isLoading, isSuccess]);

  return (
    <div className="min-h-screen container mx-auto p-4">
      <h1 className="text-3xl font-bold my-4">アニメリスト</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => handleChangeKeyword(e.target.value)}
          className="text-black border p-2 w-full"
          placeholder="Search anime..."
        />
        <div className="flex gap-2">
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
          <div
            className="px-4 flex gap-2 items-center bg-eerie-black rounded-md cursor-pointer"
            onClick={handleChangeSortDirection}
          >
            <Text label={sortDirection.toUpperCase()} />
            <ImageWithFallback
              className="cursor-pointer"
              src="/icons/sort.svg"
              width={20}
              height={20}
              alt="sort"
            />
          </div>
          <FilterGenre
            selectedGenre={selectedGenre}
            genres={animeGenres}
            onFilterChange={handleChangeGenre}
          />
        </div>
      </div>
      {displayLoader()}
      {displayError()}
      {displayEmptyResult()}
      {displayAnimeList()}
    </div>
  );
};

export default Home;
