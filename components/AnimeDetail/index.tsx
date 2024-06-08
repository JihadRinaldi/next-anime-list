import { AnimeResponse } from '@/types/animeServiceType';

import { BackButton } from '../BackButton';
import { Text } from '../Text';
import AnimeDetailHeader from './AnimeDetailHeader';

type AnimeDetailProps = {
  animeData: AnimeResponse;
};

const AnimeDetail = ({ animeData }: AnimeDetailProps) => {
  return (
    <div className="flex flex-col gap-4 items-center mx-auto p-4">
      <div className="self-start">
        <BackButton />
      </div>
      <AnimeDetailHeader animeData={animeData} />
      <div className="w-full flex flex-col gap-2">
        <div>
          <Text
            label="Synopsis"
            className="text-white font-semibold py-2 border-b-2 border-charcoal-gray"
          />
          <Text className="my-4" label={animeData.synopsis} />
        </div>
        {animeData.background ? (
          <div>
            <Text
              label="Background"
              className="text-white font-semibold py-2 border-b-2 border-charcoal-gray"
            />
            <p className="my-4">{animeData.background}</p>
          </div>
        ) : null}
        {animeData.trailer.embed_url ? (
          <div>
            <Text
              label="Trailer"
              className="text-white self-start font-semibold py-2 border-b-2 border-charcoal-gray mb-4"
            />
            <div className="w-full flex items-center justify-center">
              <iframe
                width="600"
                height="300"
                src={animeData.trailer.embed_url}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { AnimeDetail };
