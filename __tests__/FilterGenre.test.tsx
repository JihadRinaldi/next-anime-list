import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { FilterGenre } from '@/components/FilterGenre';
import { SelectOptionType } from '@/types';

const genres: SelectOptionType[] = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
];

describe('FilterGenre', () => {
  it('renders correctly and handles genre change', () => {
    const onFilterChange = jest.fn();
    const { getByRole, getByText } = render(
      <FilterGenre
        genres={genres}
        onFilterChange={onFilterChange}
        selectedGenre={null}
      />
    );

    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: '2' } });

    expect(onFilterChange).toHaveBeenCalledWith(genres[1]);
  });

  it('displays the correct selected genre', () => {
    const { getByRole } = render(
      <FilterGenre
        genres={genres}
        onFilterChange={() => {}}
        selectedGenre={genres[1]}
      />
    );

    const select = getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('2');
  });

  it('renders all genres as options', () => {
    const { getByRole, getByText } = render(
      <FilterGenre
        genres={genres}
        onFilterChange={() => {}}
        selectedGenre={null}
      />
    );

    genres.forEach((genre) => {
      expect(getByText(genre.name)).toBeInTheDocument();
    });
  });
});
