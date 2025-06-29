import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface WindowState {
  width: number;
}

const initialState: WindowState = {
  width: typeof window !== 'undefined' ? window.innerWidth : 1024, // fallback
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
  },
});

export const { setWindowWidth } = windowSlice.actions;
export default windowSlice.reducer;
