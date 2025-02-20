import './App.css';

import { Button, Container, Typography } from '@mui/material';

export const App: React.FC = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" color="primary">
        Search for anything 🐥
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        <Typography variant="caption">Search</Typography>
      </Button>
    </Container>
  );
};
