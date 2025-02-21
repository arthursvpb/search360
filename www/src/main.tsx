import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/global.css';
import { theme } from './styles/theme.ts';
import { ThemeProvider, CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
