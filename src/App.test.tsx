import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders main sections of the portfolio', () => {
        render(<App />);

        expect(
            screen.getByText(/hi, my name is balázs délczeg\./i),
        ).toBeInTheDocument();

        // About heading
        expect(
            screen.getByRole('heading', { name: /about me/i }),
        ).toBeInTheDocument();

        // Projects heading
        expect(
            screen.getByRole('heading', { name: /projects/i }),
        ).toBeInTheDocument();

        // Contact heading
        expect(
            screen.getByRole('heading', { name: /contact me/i }),
        ).toBeInTheDocument();

        // Footer copy
        expect(
            screen.getByText(/2025 .*balázs délczeg\./i),
        ).toBeInTheDocument();
    });

    it('has the expected section anchors for in-page navigation', () => {
        const { container } = render(<App />);

        expect(container.querySelector('#home')).not.toBeNull();
        expect(container.querySelector('#about')).not.toBeNull();
        expect(container.querySelector('#projects')).not.toBeNull();
        expect(container.querySelector('#contact')).not.toBeNull();
    });
});
