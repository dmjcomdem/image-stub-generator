import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as HTMLToImage from 'html-to-image';
import React from 'react';

import { App } from './App';

jest.mock('html-to-image', () => ({
    toPng: jest.fn().mockResolvedValue('data')
}));

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('display the logo correctly', () => {
        expect(screen.getByText('Приложение для генерации статических изображений')).toBeInTheDocument();
    });

    it('should must be in the correct init state in view board', () => {
        const viewBoard = screen.getByTestId('view-board');
        expect(viewBoard.textContent).toBe('Placeholder 700×400');
    });

    it('should display the dimensions correctly if the placeholder is cleared', () => {
        const textFill = screen.getByTestId('text-fill');
        const viewBoard = screen.getByTestId('view-board');
        expect(viewBoard.textContent).toBe('Placeholder 700×400');
        userEvent.clear(textFill);
        expect(viewBoard.textContent).toBe('700×400');
    });

    it('the dimensions must be correctly reflected if the pattern {size} is specified', async () => {
        const textFill = screen.getByTestId('text-fill');
        const viewBoard = screen.getByTestId('view-board');
        expect(viewBoard.textContent).toBe('Placeholder 700×400');
        userEvent.clear(textFill);
        expect(viewBoard.textContent).toBe('700×400');

        userEvent.clear(textFill);
        userEvent.type(textFill, '{size}');

        expect(viewBoard.textContent).toBe('700×400');
    });

    it('should display the dimensions correctly if the dimensions are given', () => {
        const inputWidth = screen.getByTestId('input-width');
        const inputHeight = screen.getByTestId('input-height');
        const textFill = screen.getByTestId('text-fill');
        const viewBoard = screen.getByTestId('view-board');

        userEvent.clear(inputWidth);
        userEvent.clear(inputHeight);
        userEvent.type(inputWidth, '300');
        userEvent.type(inputHeight, '300');

        expect(viewBoard.textContent).toBe('Placeholder 300×300');

        userEvent.clear(textFill);
        expect(viewBoard.textContent).toBe('300×300');
    });

    it('should handler be called by clicking on the download button', () => {
        const buttonDownload = screen.getByTestId('button-download');
        userEvent.click(buttonDownload);
        expect(HTMLToImage.toPng).toBeCalled();
    });
});
