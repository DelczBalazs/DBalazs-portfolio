import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Navbar from './Navbar';

// Mocking DarkModeToggle component
vi.mock('./ui/DarkModeToggle', () => ({
    default: () => <div data-testid="dark-mode-toggle" />,
}));

describe('Navbar', () => {
    it('renders navigation links with correct anchors', () => {
        render(<Navbar />);

        const home = screen.getByRole('link', { name: /home/i });
        const about = screen.getByRole('link', { name: /about me/i });
        const projects = screen.getByRole('link', { name: /projects/i });
        const contact = screen.getByRole('link', { name: /contact/i });

        expect(home).toHaveAttribute('href', '#home');
        expect(about).toHaveAttribute('href', '#about');
        expect(projects).toHaveAttribute('href', '#projects');
        expect(contact).toHaveAttribute('href', '#contact');
    });

    it('marks clicked navigation item as active via aria-current', async () => {
        const user = userEvent.setup();
        render(<Navbar />);

        const projects = screen.getByRole('link', { name: /projects/i });

        await user.click(projects);

        expect(projects).toHaveAttribute('aria-current', 'page');
    });

    it('renders a dark mode toggle control', () => {
        render(<Navbar />);

        const toggle = screen.getByTestId('dark-mode-toggle');
        expect(toggle).toBeInTheDocument();
    });
});
