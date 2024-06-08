import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { AnimeDetailSkeleton } from '@/components';

describe('AnimeDetailSkeleton', () => {
  it('renders the skeleton correctly', () => {
    const { container } = render(<AnimeDetailSkeleton />);
    expect(container.firstChild).toHaveClass('animate-pulse');
    expect(container.querySelectorAll('.bg-gray-300').length).toBeGreaterThan(
      0
    );
  });

  it('contains placeholders for the main sections', () => {
    const { queryByText } = render(<AnimeDetailSkeleton />);
    expect(queryByText('Synopsis')).not.toBeInTheDocument();
    expect(queryByText('Background')).not.toBeInTheDocument();
    expect(queryByText('Trailer')).not.toBeInTheDocument();
  });
});
