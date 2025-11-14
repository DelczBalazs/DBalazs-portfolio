import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero section', () => {
    it('renders the main heading with the developer name', () => {
        render(<Hero />);

        // motion.h1 tartalma
        const heading = screen.getByText(/hi, my name is balázs délczeg\./i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the hero subtitle / intro text', () => {
        render(<Hero />);
        
        const subtitle = screen.getByText(/check out my skills:/i);
        expect(subtitle).toBeInTheDocument();
    });

    it('renders the technologies container with an accessibility label', () => {
        render(<Hero />);

        const techRegion = screen.getByLabelText(/technologies i use/i);
        expect(techRegion).toBeInTheDocument();
    });
});
