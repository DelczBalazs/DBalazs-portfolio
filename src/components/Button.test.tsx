import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { vi } from 'vitest';

describe('Button component', () => {
    it('renders with default label when no children are provided', () => {
        render(<Button />);

        const button = screen.getByRole('button', { name: /button/i });
        expect(button).toBeInTheDocument();
    });

    it('renders with custom children text', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Click</Button>);

        const button = screen.getByRole('button', { name: /click/i });
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('applies additional className on top of default styles', () => {
        render(<Button className="test-class">Styled</Button>);

        const button = screen.getByRole('button', { name: /styled/i });
        expect(button.className).toMatch(/test-class/);
    });

    it('respects disabled prop', () => {
        render(<Button disabled>Disabled</Button>);

        const button = screen.getByRole('button', { name: /disabled/i });
        expect(button).toBeDisabled();
    });
});
