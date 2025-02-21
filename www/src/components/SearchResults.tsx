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
import { highlightTextWithCount } from '../utils/search';

export const SearchResults = () => {
  const { results, loading, error, query } = useSelector(
    (state: RootState) => state.search
  );

  if (loading) return <CircularProgress sx={{ mt: 3 }} />;
  if (error) return <Typography color="error">❌ {error}</Typography>;
  if (results.length === 0) return <Typography mt={2}>No results.</Typography>;

  const totalOccurrences = results.reduce((sum, result) => {
    const { count } = highlightTextWithCount(result.title, query);
    return sum + count;
  }, 0);

  return (
    <Box mt={3}>
      {totalOccurrences > 0 && (
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          🔎 Found <strong>{totalOccurrences}</strong> occurrences of "
          <strong>{query}</strong>"
        </Typography>
      )}
      <List>
        {results.map((result, index) => {
          const { highlightedText } = highlightTextWithCount(
            result.title,
            query
          );

          return (
            <ListItem
              key={index}
              component="a"
              href={result.url}
              target="_blank"
            >
              <ListItemButton>
                <ListItemText primary={highlightedText} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
