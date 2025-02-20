import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => query.trim() && onSearch(query);

  return (
    <Box display="flex" gap={2} sx={{ mt: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};
