import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

interface SearchResultsProps {
  results: {
    title: string;
    url: string;
  }[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  if (results.length === 0)
    return <Typography variant="h6">No results found.</Typography>;

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
