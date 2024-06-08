import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AnimeDetailHeader from '@/components/AnimeDetail/AnimeDetailHeader';

import {
  MOCK_SINGLE_ITEM,
  MOCK_SINGLE_ITEM_WITH_NULL_DATA,
} from '../__mocks__/anime';

describe('AnimeDetailHeader with null data', () => {
  it('renders the anime title', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    expect(screen.getByText('Dokkiri Doctor Special')).toBeInTheDocument();
  });

  it('does not render the score and scored_by when they are null', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    expect(screen.queryByText('SCORE')).not.toBeInTheDocument();
    expect(screen.queryByText('0 users')).not.toBeInTheDocument();
  });

  it('renders the rank', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    expect(screen.getByText('#19340')).toBeInTheDocument();
  });

  it('renders the popularity, members, and favorites', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    expect(screen.getByText('#16510')).toBeInTheDocument();
    expect(screen.getByText('467')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders the status, episodes, type, genres, and duration', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Finished Airing')).toBeInTheDocument();
    expect(screen.getByText('Episodes:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Type:')).toBeInTheDocument();
    expect(screen.getByText('Special')).toBeInTheDocument();
    expect(screen.getByText('Genres:')).toBeInTheDocument();
    expect(screen.getByText('Comedy, Ecchi')).toBeInTheDocument();
    expect(screen.getByText('Duration:')).toBeInTheDocument();
    expect(screen.getByText('25 min')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt text', () => {
    render(<AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />);
    const image = screen.getByAltText('Dokkiri Doctor Special');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});

describe('AnimeDetailHeader Snapshot Tests', () => {
  it('renders correctly with full data', () => {
    const { container } = render(
      <AnimeDetailHeader animeData={MOCK_SINGLE_ITEM} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with partial data', () => {
    const { container } = render(
      <AnimeDetailHeader animeData={MOCK_SINGLE_ITEM_WITH_NULL_DATA} />
    );
    expect(container).toMatchSnapshot();
  });
});
