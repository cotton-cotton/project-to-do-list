import { createSlice } from '@reduxjs/toolkit';
let counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
