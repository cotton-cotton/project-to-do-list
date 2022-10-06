import { createSlice } from '@reduxjs/toolkit';
let counterSlice = createSlice({
  name: 'toDoList',
  initialState: {
    value: {
      date: '',
      toDos: '',
    },
    reducers: {},
  },
});

// export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
