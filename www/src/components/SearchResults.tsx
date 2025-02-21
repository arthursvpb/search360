import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setCurrentPage } from '../store/searchSlice';
import { highlightTextWithCount } from '../utils/search';

export const SearchResults = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error, query, currentPage, itemsPerPage } =
    useSelector((state: RootState) => state.search);

  if (loading) return <CircularProgress sx={{ mt: 3 }} />;
  if (error) return <Typography color="error">❌ {error}</Typography>;
  if (results.length === 0) return <Typography mt={2}>No results.</Typography>;

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResults = results.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const totalOccurrences = paginatedResults.reduce((sum, result) => {
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
        {paginatedResults.map((result, index) => {
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

      {totalPages > 1 && (
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
          gap={2}
          width="320px"
        >
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Typography variant="body1">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};
