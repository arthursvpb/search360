import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

import './index.css';
import { theme } from './styles/theme.ts';
import { ThemeProvider, CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <App />
    </ThemeProvider>
  </StrictMode>
);
