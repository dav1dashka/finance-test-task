import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import WatchGroup from './WatchGroup';
import Tickers from '../Tickers/Tickers';

describe('Tickers component', () => {
    test('check is ticker rendered in Watch Group after adding', async () => {
        render(
            <Provider store={store}>
                <Tickers />
            </Provider>
        );

        await waitFor(() => { expect(screen.getByText('AAPL')).toBeInTheDocument(); });

        fireEvent.click(screen.getAllByTestId('dropdown-toggle')[0]);
        fireEvent.click(screen.getAllByTestId('toggle-add')[0]);

        const { queryByText } = render(
            <Provider store={store}>
                <WatchGroup />
            </Provider>
        );

        // Незважаючи на помилку eslint деструктуруємо queryByText, щоб перевірити дані саме у компоненті Tickers
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/prefer-presence-queries
        await waitFor(() => { expect(queryByText('AAPL')).toBeInTheDocument(); });
    });
});
