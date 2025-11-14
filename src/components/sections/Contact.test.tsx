import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Contact from './Contact';

// scrollTo mock
Object.defineProperty(window, 'scrollTo', {
    value: vi.fn(),
    writable: true,
});

describe('Contact section', () => {
    it('renders the Contact me heading', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading', { name: /contact me/i });
        expect(heading).toBeInTheDocument();
    });

    it('has an email button that opens mailto link', () => {
        render(<Contact />);

        const emailButton = screen.getByLabelText(/emailbutton/i);
        const emailLink = emailButton.closest('a');
        expect(emailLink).toHaveAttribute(
            'href',
            'mailto:dbalazsworkemail@gmail.com',
        );
    });

    it('has a LinkedIn button with target=_blank and rel=noopener', () => {
        render(<Contact />);

        const linkedinButton = screen.getByLabelText(/linkedinbutton/i);
        const linkedinLink = linkedinButton.closest('a');

        expect(linkedinLink).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/delczegb/',
        );
        expect(linkedinLink).toHaveAttribute('target', '_blank');
        expect(linkedinLink).toHaveAttribute('rel');
        expect(linkedinLink?.getAttribute('rel')).toMatch(/noopener/i);
    });

    it('back to top button triggers window.scrollTo', async () => {
        const user = userEvent.setup();
        render(<Contact />);

        const backButton = screen.getByLabelText(/backhomebutton/i);
        await user.click(backButton);

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
