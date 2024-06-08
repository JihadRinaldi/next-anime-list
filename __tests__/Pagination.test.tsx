import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { Pagination } from '@/components/Pagination';

describe('Pagination', () => {
  it('renders correctly and handles page changes', () => {
    const onPageChange = jest.fn();
    const { getByText, getAllByRole } = render(
      <Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />
    );

    const previousButton = getByText('Previous');
    const nextButton = getByText('Next');
    const firstPageButton = getByText('1');
    const lastPageButton = getByText('5');

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);
    fireEvent.click(firstPageButton);
    fireEvent.click(lastPageButton);

    expect(onPageChange).toHaveBeenCalledWith(1);
    expect(onPageChange).toHaveBeenCalledWith(3);
    expect(onPageChange).toHaveBeenCalledWith(1);
    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it('disables previous button on first page', () => {
    const { getByText } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );

    const previousButton = getByText('Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    const { getByText } = render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />
    );

    const nextButton = getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('renders page numbers correctly', () => {
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  it('shows ellipsis correctly', () => {
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />
    );

    expect(getByText('...')).toBeInTheDocument();
  });
});
