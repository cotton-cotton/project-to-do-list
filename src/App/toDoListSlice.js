import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDoList: [],
  doingList: [],
};

const toDoListSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.toDoList = action.payload.data;
    },
    deleteToDo(state, action) {
      state.toDoList = action.payload.data;
    },
    progressToDo(state, action) {
      state.doingList = action.payload.data;
    },
  },
});

export const toDoActions = toDoListSlice.actions;
export default toDoListSlice.reducer;
