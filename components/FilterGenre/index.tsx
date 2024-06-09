import React from 'react';

import { SelectOptionType } from '@/types';

type FilterGenreProps = {
  genres: SelectOptionType[];
  onFilterChange: (selectedGenre: SelectOptionType | null) => void;
  selectedGenre: SelectOptionType | null;
};

const FilterGenre: React.FC<FilterGenreProps> = ({
  genres,
  onFilterChange,
  selectedGenre,
}) => {
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genreId = parseInt(event.target.value, 10);
    const selected = genres.find((genre) => genre.id === genreId) || null;
    onFilterChange(selected);
  };

  return (
    <div className="min-h-10 self-stretch flex gap-2">
      <select
        className="px-4 py-2 w-full h-full flex gap-2 items-center bg-eerie-black rounded-md cursor-pointer"
        onChange={handleGenreChange}
        value={selectedGenre?.id || ''}
      >
        <option value="">Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { FilterGenre };
