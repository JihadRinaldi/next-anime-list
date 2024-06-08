import Link from 'next/link';

import { Text } from '@/components';
import { AnimeResponse } from '@/types/animeServiceType';

import { ImageWithFallback } from '../ImageWithFallback';

type Props = {
  animeList: AnimeResponse[];
};

const AnimeList = ({ animeList }: Props) => (
  <div
    data-testid="anime-list-container"
    className="grid grid-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4"
  >
    {animeList.map((anime) => (
      <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <div
          data-testid="anime-container"
          className="h-full py-1 border border-charcoal-gray flex flex-col items-center justify-between gap-4"
        >
          <div className="h-40 w-full px-2 flex flex-col gap-2 justify-between">
            <div className="p-2 h-2/3 flex items-center justify-center">
              <Text
                label={anime.title}
                className="text-center text-pale-blue line-clamp-2 text-base font-semibold"
              />
            </div>
            <div className="h-1/3 flex gap-2 flex-wrap justify-start items-end">
              {anime.genres.map((genre) => (
                <Text
                  className="text-xs rounded-md px-2 whitespace-nowrap text-silver-gray border border-charcoal-gray bg-dark-gray"
                  key={genre.mal_id}
                  label={genre.name}
                />
              ))}
            </div>
          </div>
          <div className="relative aspect-[128/201] w-full h-full">
            <ImageWithFallback
              data-testid="anime-banner"
              fill
              priority
              src={anime.images.webp.image_url}
              alt={anime.title}
              className="object-cover transition-opacity opacity-0"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            {anime.score ? (
              <div className="flex gap-2 items-center">
                <ImageWithFallback
                  src="/icons/star.svg"
                  width={16}
                  height={16}
                  className="w-auto h-auto"
                  alt="star-icon"
                />
                <Text label={`${anime.score}`} className="text-light-gray" />
              </div>
            ) : null}
            <div className="flex gap-2 items-center">
              <ImageWithFallback
                src="/icons/member.svg"
                width={16}
                height={16}
                alt="star-icon"
              />
              <Text
                label={`${anime.members.toLocaleString()}`}
                className="text-light-gray"
              />
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export { AnimeList };
