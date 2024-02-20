import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import tickersReducer from './reducers/tickersSlice/tickersSlice';
import wgSlice from './reducers/wgSlice/wgSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
    watchGroup: wgSlice
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<
  typeof store.getState>> = useSelector;