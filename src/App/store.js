import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './toDoListSlice';

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
