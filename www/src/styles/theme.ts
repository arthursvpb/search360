import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B9B4C7',
    },
    secondary: {
      main: '#FAF0E6',
    },
    background: {
      default: '#352F44',
      paper: '#5C5470',
    },
    text: {
      primary: '#FAF0E6',
      secondary: '#B9B4C7',
    },
    error: {
      main: '#D9534F',
    },
    warning: {
      main: '#E6A23C',
    },
    info: {
      main: '#5FB3B3',
    },
    success: {
      main: '#5CB85C',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    body1: {
      fontSize: '1rem',
    },
  },
});
