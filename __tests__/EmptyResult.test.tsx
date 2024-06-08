import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { EmptyResult } from '@/components';

describe('EmptyResult', () => {
  it('renders the default empty result message', () => {
    render(<EmptyResult />);
    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });

  it('renders a custom empty result message', () => {
    const customMessage = 'Custom no results message.';
    render(<EmptyResult message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
