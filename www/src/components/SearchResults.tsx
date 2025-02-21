import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const SearchResults = () => {
  const { results, loading, error } = useSelector(
    (state: RootState) => state.search
  );

  if (loading) return <CircularProgress sx={{ mt: 3 }} />;
  if (error) return <Typography color="error">❌ {error}</Typography>;
  if (results.length === 0) return <Typography mt={2}>No results.</Typography>;

  return (
    <Box mt={3}>
      <List>
        {results.map((result, index) => (
          <ListItem key={index} component="a" href={result.url} target="_blank">
            <ListItemButton>
              <ListItemText primary={result.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
