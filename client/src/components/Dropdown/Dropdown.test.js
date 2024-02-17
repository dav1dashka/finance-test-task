import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

window.setImmediate = window.setTimeout;

describe('Dropdown component', () => {
    test('is button on page', () => {
        render(<Dropdown />);

        expect(screen.getByTestId('dropdown-toggle')).toBeInTheDocument();
    });

    test('dropdown toggle', () => {
        render(<Dropdown />);

        expect(screen.queryByTestId('dropdown-menu')).toBeNull();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.queryByTestId('dropdown-menu')).toBeNull();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.getByTestId('toggle-show')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.queryByTestId('toggle-show')).toBeNull();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.getByTestId('toggle-add')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        expect(screen.queryByTestId('toggle-add')).toBeNull();
    })
});