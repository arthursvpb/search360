import { configureStore } from '@reduxjs/toolkit';
import queryHistoryReducer from './queryHistorySlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    queryHistory: queryHistoryReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
