import { useState } from 'react';
import { FaSort, FaTimes } from 'react-icons/fa';

import { SORT_OPTIONS, capitalizeFirstLetter } from '@/utils/constants';

interface Props {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortDropdown = ({ sortOption, setSortOption }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white bg-eerie-black px-4 py-2 rounded-md"
      >
        <span>Sorted by {capitalizeFirstLetter(sortOption)}</span>
        <FaSort />
      </button>
      {isOpen && (
        <div className="absolute z-10 top-10 left-0 bg-dark-gray p-4 rounded-md shadow-lg">
          <button
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="text-white" />
          </button>
          {SORT_OPTIONS.map((option) => (
            <div key={option} className="flex items-center gap-2 py-2">
              <input
                type="radio"
                id={option}
                name="sort"
                value={option}
                checked={sortOption === option}
                onChange={() => handleOptionClick(option)}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor={option} className="text-white cursor-pointer">
                {capitalizeFirstLetter(option)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SortDropdown };
