import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Ticker from './Ticker';

const info = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: 279.29,
    change: 64.52,
    change_percent: 0.84,
    dividend: 0.56,
    yield: 1.34,
    last_trade_time: '2021-04-30T11:53:21.000Z',
};
describe('Ticker component', () => {
    test('toggle ticker visibility form more and less 930px for first group', () => {
        render(
            <Provider store={store}>
                <Ticker info={info} color='red' />
            </Provider>
        )

        global.innerWidth = 932;

        expect(screen.getByTestId('ticker-exchange-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-price-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-change-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-change_percent-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-dividend-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-yield-932')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-last_trade_time-932')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        fireEvent.click(screen.getByTestId('toggle-show'));

        expect(screen.queryByTestId('ticker-exchange-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-price-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change_percent-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-dividend-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-yield-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-last_trade_time-932')).not.toBeInTheDocument();

        global.innerWidth = 928;
        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        fireEvent.click(screen.getByTestId('toggle-show'));

        expect(screen.queryByTestId('ticker-exchange-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-price-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change_percent-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-dividend-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-yield-932')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-last_trade_time-932')).not.toBeInTheDocument();
    });

    test('toggle ticker visibility form more and less 930px for second group', () => {
        render(
            <Provider store={store}>
                <Ticker info={info} color='red' />
            </Provider>
        )

        global.innerWidth = 928;

        expect(screen.getByTestId('ticker-price-928')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-change-928')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-change_percent-928')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-dividend-928')).toBeInTheDocument();
        expect(screen.getByTestId('ticker-yield-928')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        fireEvent.click(screen.getByTestId('toggle-show'));
        
        expect(screen.queryByTestId('ticker-price-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change_percent-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-dividend-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-yield-928')).not.toBeInTheDocument();

        global.innerWidth = 932;

        fireEvent.click(screen.getByTestId('dropdown-toggle'));
        fireEvent.click(screen.getByTestId('toggle-show'));

        expect(screen.queryByTestId('ticker-price-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-change_percent-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-dividend-928')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ticker-yield-928')).not.toBeInTheDocument();
    });
});