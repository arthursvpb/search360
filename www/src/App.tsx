import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { SearchBar } from './components/SearchBar.tsx';
import { SearchResults } from './components/SearchResults.tsx';
import { search } from './api/search';

export const App = () => {
  const [results, setResults] = useState<{ title: string; url: string }[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await search(query);
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        🐥 Search360
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </Container>
  );
};
