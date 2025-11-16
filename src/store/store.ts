import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});

// Типизация для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;