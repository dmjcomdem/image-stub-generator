import { render, screen } from '@testing-library/react';
import React from 'react';

import { App } from './App';

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('reder', async () => {
        const logoTitle = await screen.getByText('Application for generating static client images of stubs'); //?
        expect(logoTitle).toBeInTheDocument();
    });
});
