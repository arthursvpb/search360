import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { QueryHistory } from './components/QueryHistory';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { fetchQueryHistory } from './store/queryHistorySlice';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQueryHistory());
  }, [dispatch]);

  return (
    <>
      <QueryHistory />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          🐥 Search360
        </Typography>
        <SearchBar />
        <SearchResults />
      </Container>
    </>
  );
};
