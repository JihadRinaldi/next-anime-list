import { useRouter } from 'next/router';

import { AnimeDetail, AnimeDetailSkeleton } from '@/components';
import { ErrorPage } from '@/components/ErrorPage';
import { useGetAnimeByIdQuery } from '@/redux/services/anime';

const AnimeDetailPage = () => {
  const router = useRouter();
  const { id: animeID } = router.query;
  const {
    data: animeByIdResponse,
    error,
    isLoading,
  } = useGetAnimeByIdQuery({ id: animeID as string });

  if (isLoading) return <AnimeDetailSkeleton />;
  if (error) return <ErrorPage />;
  if (animeByIdResponse?.data) {
    return <AnimeDetail animeData={animeByIdResponse.data} />;
  }

  return null;
};

export default AnimeDetailPage;
