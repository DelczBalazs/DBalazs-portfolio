import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('renders social links to LinkedIn and GitHub', () => {
        render(<Footer />);

        const linkedin = screen.getByRole('link', { name: /linkedin/i });
        const github = screen.getByRole('link', { name: /github/i });

        expect(linkedin).toBeInTheDocument();
        expect(github).toBeInTheDocument();
    });

    it('social links have correct href and security attributes', () => {
        render(<Footer />);

        const linkedin = screen.getByRole('link', { name: /linkedin/i });
        const github = screen.getByRole('link', { name: /github/i });

        expect(linkedin).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/delczegb/',
        );
        expect(github).toHaveAttribute('href', 'https://github.com/DelczBalazs');

        [linkedin, github].forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel');
            expect(link.getAttribute('rel')).toMatch(/noopener/i);
        });
    });

    it('shows the copyright line with your name', () => {
        render(<Footer />);

        const copyright = screen.getByText(/2025 .*balázs délczeg\./i);
        expect(copyright).toBeInTheDocument();
    });
});
