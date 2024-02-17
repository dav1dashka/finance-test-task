import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './reducers/tickersSlice/tickersSlice';
import wgSlice from './reducers/wgSlice/wgSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
    watchGroup: wgSlice
  },
})