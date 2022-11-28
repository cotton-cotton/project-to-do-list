import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDoList: [],
  doneList: [],
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
      state.doneList = action.payload.data;
    },
  },
});

export const toDoActions = toDoListSlice.actions;
export default toDoListSlice.reducer;
