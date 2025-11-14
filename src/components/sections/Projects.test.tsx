import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects section', () => {
    it('renders Projects heading and intro text', () => {
        render(<Projects />);

        const heading = screen.getByRole('heading', { name: /projects/i });
        expect(heading).toBeInTheDocument();

        const intro = screen.getByText(/curated selection of production-minded full-stack work/i);
        expect(intro).toBeInTheDocument();
    });

    it('renders all project cards with titles', () => {
        render(<Projects />);

        expect(
            screen.getByText(/employee management - react \+ spring/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/solarwatch - react \+ spring boot/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/presetcrate - vs code extension/i),
        ).toBeInTheDocument();
    });

    it('renders external project links with target=_blank and rel=noopener', () => {
        render(<Projects />);

        const repoLinks = screen.getAllByRole('link', { name: /repo/i });
        const liveLinks = screen.getAllByRole('link', { name: /live demo/i });

        [...repoLinks, ...liveLinks].forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel');
            expect(link.getAttribute('rel')).toMatch(/noopener/i);
        });
    });
});
