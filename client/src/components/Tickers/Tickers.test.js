/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Tickers from './Tickers';

describe('Tickers component', () => {
    test('should render tickers with data from currentData', async () => {
        const { queryByTestId } = render(
            <Provider store={store}>
                <Tickers />
            </Provider>
        );

        await waitFor(() => {
            const tickers = ['AAPL', 'GOOGL', 'MSFT', 'FB', 'TSLA'];
            tickers.forEach(ticker => {
                expect(screen.getByText(ticker)).toBeInTheDocument();
            });
        });

        fireEvent.click(screen.getAllByTestId('dropdown-toggle')[0]);
        fireEvent.click(screen.getAllByTestId('toggle-add')[0]);

        // Незважаючи на помилку eslint деструктуруємо queryByTestId, щоб перевірити дані саме у компоненті Tickers
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(queryByTestId('AAPL')).not.toBeInTheDocument();
        expect(queryByTestId('GOOGL')).not.toBeInTheDocument();
        expect(queryByTestId('MSFT')).not.toBeInTheDocument();
        expect(queryByTestId('FB')).not.toBeInTheDocument();
        expect(queryByTestId('TSLA')).not.toBeInTheDocument();
    });
});