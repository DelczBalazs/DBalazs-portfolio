import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import DarkModeToggle from '../DarkModeToggle';

const setThemeMock = vi.fn();

vi.mock('../../../lib/useTheme', () => ({
    useTheme: () => ({
        theme: 'light',
        setTheme: setThemeMock,
    }),
}));

describe('DarkModeToggle', () => {
    beforeEach(() => {
        setThemeMock.mockClear();
    });

    it('renders all three theme buttons', () => {
        render(<DarkModeToggle />);

        expect(
            screen.getByRole('button', { name: /use light theme/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /use system theme/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /use dark theme/i }),
        ).toBeInTheDocument();
    });

    it('calls setTheme with correct values when buttons are clicked', async () => {
        const user = userEvent.setup();
        render(<DarkModeToggle />);

        const lightBtn = screen.getByRole('button', { name: /use light theme/i });
        const systemBtn = screen.getByRole('button', { name: /use system theme/i });
        const darkBtn = screen.getByRole('button', { name: /use dark theme/i });

        await user.click(lightBtn);
        await user.click(systemBtn);
        await user.click(darkBtn);

        expect(setThemeMock).toHaveBeenCalledWith('light');
        expect(setThemeMock).toHaveBeenCalledWith('system');
        expect(setThemeMock).toHaveBeenCalledWith('dark');
    });
});
