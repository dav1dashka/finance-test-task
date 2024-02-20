import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DataType } from '../../../helpers/types';

type StateType = {
  previousData: DataType[] | [],
  currentData: DataType[]
}

const initialState: StateType = {
  previousData: [],
  currentData: []
}

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setTickersData(state, action: PayloadAction<DataType[]>) {
      state.previousData = state.currentData;
      state.currentData = action.payload;
    },
  },
});

export const { setTickersData } = tickersSlice.actions;
export default tickersSlice.reducer;