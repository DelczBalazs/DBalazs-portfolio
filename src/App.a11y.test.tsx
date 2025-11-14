import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from './App';

describe('App accessibility', () => {
    it(
        'has no obvious accessibility violations on first render',
        async () => {
            const { container } = render(<App />);
            const results = await axe(container);

            expect(results.violations).toHaveLength(0);
        },
        15000,
    );
});
