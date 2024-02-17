import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previousData: [],
  currentData: []
}

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setTickersData(state, action) {
      state.previousData = state.currentData;
      state.currentData = action.payload;
    },
  },
});

export const { setTickersData } = tickersSlice.actions;
export default tickersSlice.reducer;