import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHistory } from '../api/history';

interface QueryHistoryEntry {
  id: number;
  searchTerm: string;
  createdAt: string;
}

interface QueryHistoryState {
  history: QueryHistoryEntry[];
  loading: boolean;
  error: string | null;
}

const initialState: QueryHistoryState = {
  history: [],
  loading: false,
  error: null,
};

export const fetchQueryHistory = createAsyncThunk(
  'queryHistory/fetch',
  async () => {
    const response = await getHistory();
    return response;
  }
);

const queryHistorySlice = createSlice({
  name: 'queryHistory',
  initialState,
  reducers: {
    addQueryToHistory(state, action) {
      const exists = state.history.some(
        entry => entry.searchTerm === action.payload.searchTerm
      );
      if (!exists) {
        state.history = [action.payload, ...state.history].slice(0, 10);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQueryHistory.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQueryHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchQueryHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load history';
      });
  },
});

export const { addQueryToHistory } = queryHistorySlice.actions;
export default queryHistorySlice.reducer;
