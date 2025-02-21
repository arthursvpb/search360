import { useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
  CircularProgress,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchQueryHistory } from '../store/queryHistorySlice';
import { updateQuery, performSearch } from '../store/searchSlice';

export const QueryHistory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { history, loading, error } = useSelector(
    (state: RootState) => state.queryHistory
  );

  useEffect(() => {
    dispatch(fetchQueryHistory());
  }, [dispatch]);

  const handleSelectQuery = (query: string) => {
    dispatch(updateQuery(query));
    dispatch(performSearch(query));
  };

  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 250 }}>
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6">Search History</Typography>

        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}

        <List>
          {history.map(entry => (
            <ListItem key={entry.id} component="li">
              <ListItemButton
                onClick={() => handleSelectQuery(entry.searchTerm)}
              >
                <ListItemText primary={entry.searchTerm} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
