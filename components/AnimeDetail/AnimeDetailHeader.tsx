import { AnimeResponse } from '@/types/animeServiceType';

import { ImageWithFallback } from '../ImageWithFallback';
import { Text } from '../Text';

type AnimeDetailProps = {
  animeData: AnimeResponse;
};

const AnimeDetailHeader = ({ animeData }: AnimeDetailProps) => {
  const getGenres = animeData.genres.map((genre) => genre.name).join(', ');
  const animeStatisticsClassName = 'text-3xl font-bold';

  const statisticsTitle = (title: string) => (
    <Text
      label={title}
      className="w-full text-center bg-blue-600 px-2 rounded-md mb-1"
    />
  );

  return (
    <div className="p-4 flex gap-2 w-full bg-eerie-black rounded-md">
      <div className="relative aspect-[184/289] w-48 h-full">
        <ImageWithFallback
          fill
          src={animeData.images.webp.image_url}
          alt={animeData.title}
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{animeData.title}</h1>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex gap-6 items-start">
            {animeData.score && animeData.scored_by ? (
              <div className="flex flex-col items-center justify-center gap-1">
                {statisticsTitle('SCORE')}
                <Text
                  label={`${animeData.score}`}
                  className={animeStatisticsClassName}
                />
                <Text
                  className="text-center"
                  label={`${animeData.scored_by.toLocaleString()} users`}
                />
              </div>
            ) : null}
            {animeData.rank ? (
              <div className="flex flex-col items-center justify-center gap-1">
                {statisticsTitle('RANKED')}
                <Text
                  label={`#${animeData.rank}`}
                  className={animeStatisticsClassName}
                />
              </div>
            ) : null}
            <div className="flex flex-col items-center justify-center gap-1">
              {statisticsTitle('POPULARITY')}
              <Text
                label={`#${animeData.popularity}`}
                className={animeStatisticsClassName}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              {statisticsTitle('MEMBERS')}
              <Text
                label={animeData.members.toLocaleString()}
                className={animeStatisticsClassName}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              {statisticsTitle('FAVORITES')}
              <Text
                label={animeData.favorites.toLocaleString()}
                className={animeStatisticsClassName}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Text className="font-semibold" label="Status: " />
                <Text label={animeData.status} />
              </div>
              <div className="flex gap-2">
                <Text className="font-semibold" label="Episodes: " />
                <Text label={`${animeData.episodes}`} />
              </div>
              <div className="flex gap-2">
                <Text className="font-semibold" label="Type: " />
                <Text label={animeData.type} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {animeData.genres.length ? (
                <div className="flex gap-2">
                  <Text className="font-semibold" label="Genres: " />
                  <Text label={getGenres} />
                </div>
              ) : null}
              <div className="flex gap-2">
                <Text className="font-semibold" label="Duration: " />
                <Text label={animeData.duration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailHeader;
