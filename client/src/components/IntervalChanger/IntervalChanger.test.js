import { render, screen, fireEvent } from '@testing-library/react';
import IntervalChanger from './IntervalChanger';

window.setImmediate = window.setTimeout;

describe('IntervalChanger component', () => {
    test('are elements on page', () => {
        render(<IntervalChanger />);

        const input = screen.getByPlaceholderText('int');
        const button = screen.getByText(/Змінити інтервал/);

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('check controlled input', () => {
        render(<IntervalChanger />);

        const input = screen.getByPlaceholderText('int');

        fireEvent.input(input, {
            target: { value: '1' }
        })

        expect(input).toContainHTML('1');
    });

    test('is display verify message from state', () => {
        render(<IntervalChanger />);

        const input = screen.getByPlaceholderText('int');
        const button = screen.getByText(/Змінити інтервал/);

        fireEvent.change(input, { target: { value: 100000 } });
        fireEvent.click(button);
        expect(screen.queryByTestId('verify').textContent).toBe('Найбільше допустиме значення 99999 секунд');

        fireEvent.change(input, { target: { value: 0 } });
        fireEvent.click(button);
        expect(screen.queryByTestId('verify').textContent).toBe('Найменше допустиме значення 1 секунда');

        fireEvent.change(input, { target: { value: 10 } });
        fireEvent.click(button);
        expect(screen.queryByTestId('verify').textContent).toBe('');

        fireEvent.change(input, { target: { value: 'a10' } });
        fireEvent.click(button);
        expect(screen.queryByTestId('verify').textContent).toBe('Дозволені тільки цифри');
    });
})
