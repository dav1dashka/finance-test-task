import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { isChanged: boolean, } = {
  isChanged: false,
}

const wgSlice = createSlice({
  name: 'watchGroup',
  initialState,
  reducers: {
    setWgData(state, action: PayloadAction<boolean>) {
      state.isChanged = action.payload;
    },
  },
});

export const { setWgData } = wgSlice.actions;
export default wgSlice.reducer;