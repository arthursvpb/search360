import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updateQuery, performSearch } from '../store/searchSlice';

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.search.query);
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(updateQuery(searchTerm));
      dispatch(performSearch(searchTerm));
    }
  };

  return (
    <Box display="flex" gap={2} sx={{ mt: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};
