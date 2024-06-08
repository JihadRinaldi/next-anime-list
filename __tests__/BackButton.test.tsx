import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';

import { BackButton } from '@/components/BackButton';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('BackButton', () => {
  it('renders correctly and calls router.back when clicked', () => {
    const back = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ back });

    const { getByRole } = render(<BackButton />);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(back).toHaveBeenCalled();
  });
});
