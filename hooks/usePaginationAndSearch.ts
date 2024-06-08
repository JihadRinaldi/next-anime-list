import { useRouter } from 'next/router';
import { useState } from 'react';

export type Query = {
  key: string;
  value: string;
};

const usePaginationAndSearch = () => {
  const { query, replace, pathname } = useRouter();
  const [currentPage, setCurrentPage] = useState(query.page || 1);

  /** use this to get value from query string */
  function getQuery<T>(key: string, defaultValue: T): T {
    return (query[key] as T) ?? defaultValue;
  }

  const toPage = (page: number) => {
    replace({
      pathname,
      query: {
        ...query,
        page,
      },
    });
    setCurrentPage(page);
  };

  const toNextPage = (totalPage: number) => {
    if (Number(query.page) + 1 > totalPage) return toPage(totalPage);
    toPage(Number(query.page) + 1);
  };

  const toPrevPage = () => {
    if (!Number.isFinite(query.page) || Number(query.page) <= 1)
      return toPage(1);
    toPage(Number(query.page) - 1);
  };

  const applyFilters = (queries: Query[], toFirstPage = true) => {
    const filters: Record<string, string> = {};

    queries.forEach((query) => {
      filters[query.key] = query.value;
    });

    replace({
      pathname,
      query: {
        ...query,
        ...filters,
        page: query.page && !toFirstPage ? query.page : 1,
      },
    });
  };

  const removeFilter = (key: string) => {
    const { [key]: _, ...rest } = query;
    replace({
      pathname,
      query: rest,
    });
  };

  return {
    currentPage,
    getQuery,
    toNextPage,
    toPrevPage,
    toPage,
    applyFilters,
    removeFilter,
  };
};

export default usePaginationAndSearch;
