import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { AnimeListSkeleton } from '@/components';

describe('AnimeListSkeleton', () => {
  it('renders the skeleton correctly', () => {
    const { container } = render(<AnimeListSkeleton />);
    expect(container.firstChild).toHaveClass('animate-pulse');
    expect(container.querySelectorAll('.bg-gray-300').length).toBeGreaterThan(
      0
    );
  });

  it('renders the correct number of skeleton items', () => {
    const { container } = render(<AnimeListSkeleton />);
    expect(container.querySelectorAll('.border.rounded.shadow-sm').length).toBe(
      12
    );
  });
});
