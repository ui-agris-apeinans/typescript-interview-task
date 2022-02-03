import { render, screen } from '@testing-library/react';

import App from './App';

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('App', () => {
    test('renders', () => {
        render(<App />);
    });

    test('routes to Login page if no auth token', () => {
        render(<App />);
        const loginElement = screen.getByTestId('login');

        expect(loginElement).toBeInTheDocument()
    });

    test('routes to PasswordHealth loading page if got auth token', async () => {
        localStorage.setItem('token', '12345');
        render(<App />);
        const loadingScreenElement = screen.getByTestId('loadingScreen');

        expect(loadingScreenElement).toBeInTheDocument()
    });
})