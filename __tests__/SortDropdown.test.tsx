import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { SortDropdown } from '@/components/SortDropdown';
import { SORT_OPTIONS } from '@/utils/constants';

describe('SortDropdown', () => {
  it('renders the dropdown button correctly', () => {
    const { getByText } = render(
      <SortDropdown sortOption="Name" setSortOption={() => {}} />
    );
    expect(getByText('Sorted by Name')).toBeInTheDocument();
  });

  it('toggles the dropdown options on button click', () => {
    const { getByText, queryByText } = render(
      <SortDropdown sortOption="Name" setSortOption={() => {}} />
    );
    const button = getByText('Sorted by Name');

    fireEvent.click(button);
    SORT_OPTIONS.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });

    fireEvent.click(button);
    SORT_OPTIONS.forEach((option) => {
      expect(queryByText(option)).not.toBeInTheDocument();
    });
  });

  it('calls setSortOption with the correct value on option click', () => {
    const setSortOption = jest.fn();
    const { getByText } = render(
      <SortDropdown sortOption="Name" setSortOption={setSortOption} />
    );
    const button = getByText('Sorted by Name');

    fireEvent.click(button);
    const firstOption = getByText(SORT_OPTIONS[0]);
    fireEvent.click(firstOption);

    expect(setSortOption).toHaveBeenCalledWith(SORT_OPTIONS[0]);
  });

  it('closes the dropdown when an option is clicked', () => {
    const { getByText, queryByText } = render(
      <SortDropdown sortOption="Name" setSortOption={() => {}} />
    );
    const button = getByText('Sorted by Name');

    fireEvent.click(button);
    const firstOption = getByText(SORT_OPTIONS[0]);
    fireEvent.click(firstOption);

    SORT_OPTIONS.forEach((option) => {
      expect(queryByText(option)).not.toBeInTheDocument();
    });
  });
});
