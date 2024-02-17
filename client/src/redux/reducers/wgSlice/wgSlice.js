import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChanged: false,
}

const wgSlice = createSlice({
  name: 'watchGroup',
  initialState,
  reducers: {
    setWgData(state, action) {
      state.isChanged = action.payload;
    },
  },
});

export const { setWgData } = wgSlice.actions;
export default wgSlice.reducer;