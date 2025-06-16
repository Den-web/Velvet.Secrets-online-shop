import { createSlice } from '@reduxjs/toolkit';
import { dropdownMenu } from '../data/dropdownMenu';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: dropdownMenu,
  reducers: {},
});

export default dropdownSlice.reducer;
