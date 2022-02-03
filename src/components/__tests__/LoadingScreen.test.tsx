import { render, screen } from '@testing-library/react';

import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
    test('renders loading text', () => {
        render(<LoadingScreen />);
        const errorText = screen.getByText(/Loading.../i);

        expect(errorText).toBeInTheDocument();
    });
})