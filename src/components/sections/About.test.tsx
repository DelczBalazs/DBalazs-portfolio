import { render, screen } from '@testing-library/react';
import About from './About';

describe('About section', () => {
    it('renders the About me heading', () => {
        render(<About />);

        const heading = screen.getByRole('heading', { name: /about me/i });
        expect(heading).toBeInTheDocument();
    });

    it('describes clean, scalable full-stack products', () => {
        render(<About />);

        const paragraph = screen.getByText(/clean, scalable full-stack products/i);
        expect(paragraph).toBeInTheDocument();
    });

    it('mentions testing and CI/CD in the description', () => {
        render(<About />);

        const testingText = screen.getByText(/testing/i);
        const ciCdText = screen.getByText(/ci\/cd/i);

        expect(testingText).toBeInTheDocument();
        expect(ciCdText).toBeInTheDocument();
    });

    it('renders the "My goal" colorful text line', () => {
        render(<About />);

        const goal = screen.getByText(/my goal:/i);
        expect(goal).toBeInTheDocument();
    });
});
