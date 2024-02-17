import io from 'socket.io-client';
import { store } from '../redux/store';
import { setTickersData } from '../redux/reducers/tickersSlice/tickersSlice';

const socket = io('http://localhost:4000');

socket.on('ticker', (data) => {
    store.dispatch(setTickersData(data));
});

socket.emit('start');

export default socket;