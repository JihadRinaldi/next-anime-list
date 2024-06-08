import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { AnimeList } from '@/components';

import { MOCK_ANIME_LIST } from '../__mocks__/anime';

describe('AnimeList component', () => {
  it('renders correctly with empty animeList', () => {
    const { container } = render(<AnimeList animeList={[]} />);
    expect(screen.getByTestId('anime-list-container')).toBeInTheDocument();
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders list of anime correctly', () => {
    const { getByAltText, getAllByTestId } = render(
      <AnimeList animeList={MOCK_ANIME_LIST} />
    );

    // Check if MOCK size equal with total anime container
    expect(getAllByTestId('anime-container').length).toEqual(15);

    // Check if all anime images are rendered
    MOCK_ANIME_LIST.forEach((anime) => {
      expect(getByAltText(anime.title)).toBeInTheDocument();
    });

    const image = screen.getAllByTestId('anime-banner')[0];

    image.dispatchEvent(new Event('load'));
  });
});
