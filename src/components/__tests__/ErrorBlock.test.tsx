import { render, screen } from '@testing-library/react';

import ErrorBlock from '../ErrorBlock';

describe('ErrorBlock', () => {
    test('renders ErrorBlock if prop error', () => {
        render(<ErrorBlock error="error text" />);
        const errorText = screen.getByText(/error text/i);

        expect(errorText).toBeInTheDocument();
    });

    test('renders null if no prop error', () => {
        render(<ErrorBlock />);
        const component = screen.queryByTestId("errorBlock");

        expect(component).toBeNull();
    });
})