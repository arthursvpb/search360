import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { search } from '../api/search';
import { addQueryToHistory } from './queryHistorySlice';

interface SearchState {
  query: string;
  results: { title: string; url: string }[];
  currentPage: number;
  itemsPerPage: number;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: '',
  results: [],
  currentPage: 1,
  itemsPerPage: 2,
  loading: false,
  error: null,
};

export const performSearch = createAsyncThunk(
  'search/performSearch',
  async (query: string, { dispatch }) => {
    const response = await search(query);

    dispatch(
      addQueryToHistory({
        id: Date.now(),
        searchTerm: query,
        createdAt: new Date().toISOString(),
      })
    );

    return response;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery(state, action) {
      state.query = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(performSearch.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load search results.';
      });
  },
});

export const { updateQuery, setCurrentPage, setItemsPerPage } =
  searchSlice.actions;
export default searchSlice.reducer;
