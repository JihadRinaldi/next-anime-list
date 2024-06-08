import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import { ErrorPage } from '@/components';

// Mock useRouter from next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ErrorPage', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the default error message', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  it('renders a custom error message', () => {
    const customMessage = 'Custom error message.';
    render(<ErrorPage message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('navigates back to home when the button is clicked', () => {
    render(<ErrorPage />);
    const button = screen.getByText('Back to Home');
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('/');
  });
});
